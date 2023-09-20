
<h1 align="center">BikeStore Api</h1>

<ol>
	<li>Description.</li>
	<li>Installation and Configuration.</li>
	<li>Documentation.</li>
	<li>Depencies.</li>
	<li>Data Base.</li>
	<li>Examples Requests.</li>
	<li>Connection Example.</li>
	<li>Contact.</li>
	<li>License.</li>
</ol>



<h2>Description:</h2>

<p>	With the BikeStore API, you will be able to create a user, validate it with a code, which is sent to the email, and then log in. 
	You can also create Orders linked to the user, using a token automatically generated when logging in. Finally, they can be 		obtained through the same Token. </p>


<h2>Installation and Configuration:</h2>

<p>	In order to use the BikeStore API, it is necessary to generate the corresponding requests through the following 
	URL: "https://back-bike-store.vercel.app" , and their respective "Query Params" : </p>

 <ul>
	 <li>Register: "auth/register"</li>
	 <li>Verify user: "auth/verify"</li>
	 <li>Login: "auth/login"</li>
	 <li>Create order: "/orders"</li>
	 <li>Get orders: "/orders"</li>
 </ul>

<h2>Documentation:</h2>

<p>	In the following link you can access the documentation of the BikeStore API: </p>

	URL:"https://documenter.getpostman.com/view/28362833/2s9YBz3v4q"

<h2>Depencies:</h2>

<ul>
	<li>Node.js</li>
	<li>TypeScript</li>
	<li>Nodemon</li>
	<li>Bcryptjs</li>
	<li>Cors</li>
	<li>Dontenv</li>
	<li>Random String</li>
	<li>Json Web Token</li>
	<li>Express</li>
	<li>Express Validator</li>
	<li>Nodemailer</li>
	<li>Mongoose</li>
</ul>


<h2>Data Base: </h2>

	- MongoDB: "https://www.mongodb.com/es"

<h2>Examples Requests: </h2>

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


<h2>Connection Example:</h2>

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




<h2>Contact: </h2>
	
<p>Name: Cesar Martinez</p>
<p>Email: MartinezCesarJa@gmail.com</p>


<h2>License: </h2>

	Created By Crm.Coder

	
