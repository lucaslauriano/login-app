import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    Http,
    BaseRequestOptions,
    Response,
    ResponseOptions,
    RequestMethod,
    XHRBackend,
    RequestOptions
} from '@angular/http';


export function persistenceMethods(backend : MockBackend, options : BaseRequestOptions, realBackend : XHRBackend) {
   
    let users : any[] = JSON.parse(localStorage.getItem('users')) || [];

    backend
        .connections
        .subscribe((connection : MockConnection) => {
            setTimeout(() => {

                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                    let params = JSON.parse(connection.request.getBody());

                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        connection.mockRespond(new Response(new ResponseOptions({
                            status: 200,
                            body: {
                                id: user.id,
                                fullname: user.fullname,
                                username: user.username,
                                isSuperUser: user.isSuperUser,
                                token: 'fake-jwt-token'
                            }
                        })));
                    } else {
                        connection.mockError(new Error('Username or password is incorrect'));
                    }

                    return;
                }

                // get users
                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: users})));
                    } else {
                        connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                    }

                    return;
                }

                // get user by id
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        let urlParts = connection
                            .request
                            .url
                            .split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => {
                            return user.id === id;
                        });
                        let user = matchedUsers.length
                            ? matchedUsers[0]
                            : null;

                        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: user})));
                    } else {
                        connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                    }

                    return;
                }

                // create user
                if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
                    let newUser = JSON.parse(connection.request.getBody());

                    let duplicateUser = users
                        .filter(user => {
                        return user.username === newUser.username;
                    })
                        .length;
                    if (duplicateUser) {
                        return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
                    }

                    // save new user
                    newUser.id = users.length + 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    connection.mockRespond(new Response(new ResponseOptions({status: 200})));

                    return;
                }

                // delete user
                if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        let urlParts = connection
                            .request
                            .url
                            .split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // 200 OK
                        connection.mockRespond(new Response(new ResponseOptions({status: 200})));
                    } else {
                        // 401 not authorised 
                        connection.mockRespond(new Response(new ResponseOptions({status: 401})));
                    }

                    return;
                }

                let realHttp = new Http(realBackend, options);
                let requestOptions = new RequestOptions({
                    method: connection.request.method,
                    headers: connection.request.headers,
                    body: connection
                        .request
                        .getBody(),
                    url: connection.request.url,
                    withCredentials: connection.request.withCredentials,
                    responseType: connection.request.responseType
                });
                realHttp
                    .request(connection.request.url, requestOptions)
                    .subscribe((response : Response) => {
                        connection.mockRespond(response);
                    }, (error : any) => {
                        connection.mockError(error);
                    });

            }, 500);

        });

    return new Http(backend, options);
};

export let PersistenceProvider = {
    provide: Http,
    useFactory: persistenceMethods,
    deps: [ MockBackend, 
            BaseRequestOptions, 
            XHRBackend]
};