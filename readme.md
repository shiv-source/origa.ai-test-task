# Origa.ai coding test


1. Signup (user) [POST]

http://127.0.0.1:3000/api/signup

http://127.0.0.1:3000/api/signup-admin   [for admin only & its a protected routes ]


            request data: 

                        {
                            "name":"shiv Kumar",
                            "email":"developer.shiv2020@gmail.com",
                            "password":"admin12345"
                        }



            response data : 


                        {
                            "message": "User created successfully",
                            "success": true,
                            "result": {
                                "_id": "5f9e8039fea01e3714b2f767",
                                "name": "shiv Kumar",
                                "email": "developer.shiv2020gmail.com",
                                "userId": 1
                            }
                        }


            error response : 


                            {
                                "message": "User already exists",
                                "success": false
                            }



2. Login (user)  [post]


http://127.0.0.1:3000/api/login



            request data : 

                        {
                        
                            "email":"developer.shiv2020@gmail.com",
                            "password":"admin12345"
                        }



            response data :

                    {
                        "message": "You are loggedin successfully",
                        "success": true,
                        "_id": "5f9e8039fea01e3714b2f767",
                        "role": "user",
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjllODAzOWZlYTAxZTM3MTRiMmY3NjciLCJuYW1lIjoic2hpdiBLdW1hciIsImVtYWlsIjoiZGV2ZWxvcGVyLnNoaXYyMDIxQGdtYWlsLmNvbSIsImlhdCI6MTYwNDIyMzE1OSwiZXhwIjoxNjA0ODI3OTU5fQ.-EgACyye8u_YGfSPqMiSXlRxYp0XxgDdR3W_n9BtvXc"
                    }



3. user Profile  [GET]


http://127.0.0.1:3000/api/profile



                response data :


                            {
                                "message": "Successfully fetched your profile data",
                                "success": true,
                                "_id": "5f9e8039fea01e3714b2f767",
                                "userId": 1,
                                "name": "shiv Kumar",
                                "email": "developer.shiv2020@gmail.com",
                                "role": "user",
                                "updatedAt": "2020-11-01T09:30:33.469Z",
                                "createdAt": "2020-11-01T09:30:33.469Z"
                            }



4. create order [post]


http://127.0.0.1:3000/api/order


                request data: 

                            {
                                "subtotal": 500
                            }




                response data:

                                {
                                        "message": "order created successfully",
                                        "success": true,
                                        "result": {
                                            "orderdDate": "2020-11-01T10:05:09.917Z",
                                            "_id": "5f9e888daa488810b484edd8",
                                            "orderId": 1,
                                            "userId": 1,
                                            "subtotal": 500,
                                            "createdAt": "2020-11-01T10:06:05.333Z",
                                            "updatedAt": "2020-11-01T10:06:05.333Z",
                                            "__v": 0
                                        }
                                    }


5. Fetch each user's data;

http://127.0.0.1:3000/api/order   [GET]   


response data :

                    {
                        "message": "Order list fetched successfully",
                        "success": true,
                        "result": [
                            {
                                "userId": 1,
                                "name": "shiv Kumar",
                                "noOfOrders": 7,
                                "averageBillValue": "571.43"
                            },
                            {
                                "userId": 2,
                                "name": "Rohit Kumar",
                                "noOfOrders": 2,
                                "averageBillValue": "399.50"
                            }
                        ]
                    }



6. Update No of Orders (noOfOrders)  [PUT]

http://127.0.0.1:3000/api/order/:userId

http://127.0.0.1:3000/api/order/3



            request data :


                        {
                            "noOfOrders" : "20"
                        }


            response data: 


                        {
                            "message": "Successfully updated",
                            "success": true
                        }

 