
									BikeStore Api


		1. Description.
		2. Installation and Configuration.
		3. Documentation.
		4. Depencies.
		5. Data Base.
		6. Examples Requests.
		7. Connection Example.
		8. Contact.
		9. License.


Description:

	With the BikeStore API, you will be able to create a user, validate it with a code, which is sent to the email, and then log in. 
	You can also create Orders linked to the user, using a token automatically generated when logging in. Finally, they can be obtained through the same Token.


Installation and Configuration:

	In order to use the BikeStore API, it is necessary to generate the corresponding requests through the following URL: "https://back-bike-store.vercel.app", and 	their respective "Query Params" :

   		* Register: "auth/register"
   		* Verify user: "auth/verify"
 		* Login: "auth/login"
   		* Create order: "/orders"
   		* Get orders: "/orders"

Documentation:

	In the following link you can access the documentation of the BikeStore API:

	URL:"https://documenter.getpostman.com/view/28362833/2s9YBz3v4q"

Depencies:

	- Node.js
	- TypeScript
	- Nodemon
	- Bcryptjs
	- Cors
	- Dontenv
	- Random String
	- Json Web Token
	- Express
	- Express Validator
	- Nodemailer
	- Mongoose

Data Base: 

	- MongoDB

Examples Requests: 

	Register: "URL/auth/register"
		Body{
    		    "name": "Nombre y Apellido",
    		    "dateOfBirth": 15092023,
    		    "username": "NombreDeUsuario",
    		    "email": "email@email.com",
    		    "password": "Password"
		    }

	Verify User: "URL/auth/verify"
		Body{
    		    "email": "email@email.com",
    		    "code": "44GAsG"
		    }

	Login User: "URL/auth/login"
		Body{
		    "username": "NombreDeUsuario",
    		    "password": "Password"
		    }

	Create User: "URL/orders"
		Headers{
			"x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0mE1NDNiZjQwNjA0OWY5MDczYjI4MyIsImlhdCI6MTY5NDE
                                   yNzYyNSwiZXhwIjoxNjk0MTQyMDI1fQ.cwSk91k3VfmX9_vV9b78CbJcFF_FR8pk7kOKEwl1gXM"
			}

		Body{
		    "price": 150000,
    		    "shipingCost": 1500,
    		    "total": 151500,
    		    "shippingDetails": {
        				"name": "Nombre y Apellido",
       					"cellphone": 1512345678,
        				"location": "Ciudad",
        				"adress": "Dirección y Numero",
        				"cp": 1111
    				      },
    		    "items": [
        			{
            				"id": 15,
            				"price":150000,
           				"quantity": 1,
            				"tittle": "Venzo 29"
        			}
    			    ]
		    }

	Get Orders: "URL/orders"
		Headers{
			"x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0mE1NDNiZjQwNjA0OWY5MDczYjI4MyIsImlhdCI6MTY5NDE
                                   yNzYyNSwiZXhwIjoxNjk0MTQyMDI1fQ.cwSk91k3VfmX9_vV9b78CbJcFF_FR8pk7kOKEwl1gXM"
			}


Connection Example:

		The following example shows a login request made with Axios

			const loginUser = async (username, password) => {
    				try{
        				const {data} = await axios.post(`${URLBASE}/auth/login`,{
            				username, password
        			    });
        				console.log(data)
        				return
    				}catch(error){
        				console.log(error)
        				return
    					}
				}

			loginUser( "NombreDeUsuario", "Password" )




Contact: 
	
	Name: Cesar Martinez
	Email: MartinezCesarJa@gmail.com


License:

	Created By Crm.Coder

	
