# detail guide in urdu
1. **Express:**
   - **Description:** Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
   - **Use:** Express simplifies the process of building web applications and APIs in Node.js. It handles routing, middleware, and HTTP request/response handling.

2. **Body-Parser:**
   - **Description:** Body-parser is a middleware for Express.js that extracts the entire body portion of an incoming request stream and exposes it on req.body as an object.
   - **Use:** It is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property. It's commonly used for parsing JSON and URL-encoded data.

3. **Bcrypt:**
   - **Description:** Bcrypt is a password-hashing function designed to slow down brute-force attacks. It hashes passwords and provides a secure way to store user passwords in a database.
   - **Use:** Bcrypt is used for securely hashing user passwords before storing them in a database. It adds a layer of security by making it computationally intensive and time-consuming to hash passwords.

4. **CORS (Cross-Origin Resource Sharing):**
   - **Description:** CORS is a security feature implemented by web browsers that restricts web pages from making requests to a domain that is different from the one that served the web page.
   - **Use:** In the context of Node.js, the CORS package allows you to enable CORS for your Express.js applications, enabling your server to handle requests from different origins.

5. **Dotenv:**
   - **Description:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
   - **Use:** It's used to keep sensitive data (like API keys, database passwords, etc.) out of your code and configuration files, making it easier to manage different configurations for different environments (development, production, etc.).

6. **GridFS-Stream:**
   - **Description:** GridFS-Stream is a library for streaming file storage on MongoDB GridFS.
   - **Use:** GridFS is a specification for storing and retrieving large files in MongoDB. GridFS-Stream helps you stream files in and out of MongoDB, useful when dealing with large media files.

7. **Multer:**
   - **Description:** Multer is a middleware for handling multipart/form-data, commonly used for uploading files.
   - **Use:** It's used for processing `enctype="multipart/form-data"` forms, enabling you to handle file uploads. It works well with the `multer-gridfs-storage` package for storing files in MongoDB GridFS.

8. **Helmet:**
   - **Description:** Helmet helps you secure your Express.js applications by setting various HTTP headers.
   - **Use:** It adds security-related HTTP headers to the responses, protecting the application from well-known web vulnerabilities such as XSS attacks, clickjacking, and more.

9. **Morgan:**
   - **Description:** Morgan is a HTTP request logger middleware for Node.js.
   - **Use:** It's used for logging HTTP requests to the console or a file, providing useful information about incoming requests, including status codes, response times, and request methods. This can be helpful for debugging and monitoring.

10. **JsonWebToken (jsonwebtoken):**
    - **Description:** JsonWebToken is a library to work with JSON Web Tokens (JWT).
    - **Use:** JWTs are used for securely transmitting information between parties as a JSON object. In the context of Node.js, it's commonly used for authentication purposes. After a user logs in, a JWT is generated and sent to the client. The client then includes the JWT in the header of subsequent requests, allowing the server to verify the user's identity.
 IN URDU LANGUAGE   
 Jee, zarur! Yahan diye gaye libraries/modules aur unki istemalat Roman Urdu mein:

1. **Express:**
   - **Tajziya:** Express.js ek kamal or lacheela Node.js web application framework hai jo web aur mobile applications ke liye mazboot set of features provide karta hai.
   - **Istemal:** Express Node.js mein web applications aur APIs banane ka process asaan karta hai. Ye routing, middleware, aur HTTP request/response handling handle karta hai.

2. **Body-Parser:**
   - **Tajziya:** Body-parser Express.js ke liye middleware hai jo aane wale request stream ka pura body portion extract karta hai aur usay req.body ke roop mein object ke taur par expose karta hai.
   - **Istemal:** Ye incoming request bodies ko parse karne ke liye istemal hota hai middleware mein, jo ke req.body property ke roop mein available hota hai. Ye aam taur par JSON aur URL-encoded data ke liye istemal hota hai.

3. **Bcrypt:**
   - **Tajziya:** Bcrypt ek password-hashing function hai jo brute-force attacks ko rokne ke liye design kia gaya hai. Ye passwords ko hash karta hai aur user passwords ko database mein secure taur par store karne ka aik secure tariqa provide karta hai.
   - **Istemal:** Bcrypt istemal hota hai user passwords ko secure taur par hash karne ke liye, jismein ye passwords ko database mein store karne se pehle unhein secure banata hai. Ye passwords ko hash karne mein computational aur time complexity ko barha kar security add karta hai.

4. **CORS (Cross-Origin Resource Sharing):**
   - **Tajziya:** CORS ek security feature hai jo web browsers mein implement kiya gaya hai, jo web pages ko rokta hai ke woh aise domains se requests na karain jo web page ko serve karne wale domain se different hain.
   - **Istemal:** Node.js ke context mein, CORS package aapko apne Express.js applications ke liye CORS enable karne mein madad karta hai, jo aapke server ko different origins se aane wale requests handle karne ki ejazat deta hai.

5. **Dotenv:**
   - **Tajziya:** Dotenv aik zero-dependency module hai jo environment variables ko .env file se process.env mein load karta hai.
   - **Istemal:** Iska istemal sensitive data (jese ke API keys, database passwords, etc.) ko code aur configuration files mein na rakh kar manage karna mein hota hai, jisse ke aap different environments (development, production, etc.) ke liye alag configurations ko asaan se handle kar sakte hain.

6. **GridFS-Stream:**
   - **Tajziya:** GridFS-Stream MongoDB GridFS par streaming file storage ke liye aik library hai.
   - **Istemal:** GridFS ek specification hai jo MongoDB mein large files ko store aur retrieve karne ke liye use hota hai. GridFS-Stream aapko MongoDB mein files ko stream karne aur nikalne mein madad karta hai, jo ke large media files ke sath deal karne mein useful hota hai.

7. **Multer:**
   - **Tajziya:** Multer aik middleware hai jo multipart/form-data ko handle karne ke liye istemal hota hai, jo ke aam taur par files ko upload karne ke liye istemal hota hai.
   - **Istemal:** Ye `enctype="multipart/form-data"` forms ko process karne ke liye istemal hota hai, jisse ke aap file uploads ko handle kar sakte hain. Ye `multer-gridfs-storage` package ke sath use karne mein madad karta hai files ko MongoDB GridFS mein store karne mein.

8. **Helmet:**
   - **Tajziya:** Helmet aapke Express.js applications ko various HTTP headers set kar ke secure karta hai.
   - **Istemal:** Ye responses mein security-related HTTP headers add karta hai, jisse ke application ko well-known web vulnerabilities (jese ke XSS attacks, clickjacking, etc.) se protect karta hai.

9. **Morgan:**
   - **Tajziya:** Morgan Node.js ke liye aik HTTP request logger middleware hai.
   - **Istemal:** Iska istemal HTTP requests ko console ya file mein log karne ke liye hota hai, jisse ke incoming requests ke bare mein useful information provide hoti hai, jese ke status codes, response times, aur request methods. Ye debugging aur monitoring ke liye helpful hota hai.

10. **JsonWebToken (jsonwebtoken):**
    - **Tajziya:** JsonWebToken JSON Web Tokens (JWT) ke sath kam karne ke liye aik library hai.
    - **Istemal:** JWTs ko secure taur par information transmit karne ke liye use hota hai parties ke darmiyan. Node.js ke context mein, ye aam taur par authentication ke liye istemal hota hai. Jab user login karta hai, aik JWT generate hota hai aur client ko bheja jata hai. Client phir subsequent requests ke headers mein JWT include karta hai, jo server ko user ki identity verify karne mein madad karta hai.

## middleware */
Middleware ek programming concept hai jise aam taur par web development mein dekha jata hai, specifically server-side development mein. Middleware ek function hai jo HTTP request aur response ke beech mein position rakhta hai, aur jab aap kisi server ko request bhejte hain, woh request middleware functions ke series se guzarti hai, phir server ka response generate hota hai.

Yeh kuch key points hain jo middleware ke hawale se ahem hain:

1. **Request Processing:** Middleware functions aane wale HTTP requests ko process karte hain. Yeh requests ko modify kar sakte hain, naye data ko add kar sakte hain, ya phir request ko completely ignore bhi kar sakte hain.

2. **Response Generation:** Middleware functions response ko bhi modify kar sakte hain. Woh response ke content ko modify kar ke naye data ko add kar sakte hain ya phir response ko completely replace bhi kar sakte hain.

3. **Chain of Functions:** Middleware functions ko ek chain ke taur par lagaya jata hai. Jab aap koi request bhejte hain, woh request ek middleware function se dusre function tak pass hoti hai. Har function apne task ko complete kar ke next() function ko call karta hai, jisse request agle function mein move hoti hai.

4. **Error Handling:** Middleware ka istemal error handling ke liye bhi hota hai. Agar kisi function mein error aata hai, toh woh error ko capture kiya ja sakta hai aur user ko appropriate error message di ja sakti hai.

5. **Example Use Cases:**
   - **Logging:** Middleware can be used for logging requests, allowing developers to track which endpoints are being accessed and with what parameters.
   - **Authentication:** Middleware can check if a user is authenticated before allowing access to certain routes.
   - **Data Parsing:** Middleware like body-parser parses incoming request bodies, enabling applications to handle different data formats like JSON or URL-encoded data.
   - **CORS Handling:** Middleware can handle Cross-Origin Resource Sharing (CORS) headers, allowing or denying requests based on their origin.
   - **Caching:** Middleware can cache responses to improve performance and reduce server load.

Middleware ka istemal code maintainability, reusability, aur readability ke liye bhi hota hai. Yeh ek modular approach provide karta hai, jisse developers alag-alag functionality ko separate functions mein likh sakte hain, jo ke aik dusre se independent hoti hain lekin mil kar aik seamless application banati hain.

## /* configurations */
1. const __filename = fileURLToPath(import.meta.url); aur const __dirname = path.dirname(__filename);: Yeh lines file paths ko determine karti hain. Ye file ke path aur directory ka pata lagane mein madad karti hain.

2. dotenv.config();: Dotenv library istemal hoti hai environment variables ko manage karne ke liye. Ye .env file se variables ko read kar ke process.env mein set karta hai. Aapke application ke secrets ya configuration settings ko .env file mein store kiya ja sakta hai.

3. app.use(express.json());: Yeh line Express.js mein built-in middleware hai jo incoming requests ke JSON bodies ko parse karta hai. Iska matlab hai ke jab aap server ko JSON data bhejte hain, woh usay parse kar ke JavaScript objects mein tabdeel karta hai taki aap server par us data ko istemal kar sakein.

4. app.use(helmet());: Helmet library security-related HTTP headers set karti hai jo aapki application ko various web vulnerabilities se bachati hai. Ye aapki application ki security ko improve karti hai.

5. app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));: Ye line Cross-Origin Resource Policy (CORP) header ko set karti hai. Ye header aapki application ko CORS attacks se bachata hai, jise hackers cross-origin requests kar ke sensitive data ko access karne ki koshish karte hain.

6. app.use(morgan("common"));: Morgan middleware HTTP requests ko log karta hai. "common" yahan ek predefined log format hai jo request ke details ko console par show karta hai, jese ke HTTP method, status code, aur response time.

7.  app.use(bodyParser.json({ limit: "30mb", extended: true })); aur app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));: Ye lines body-parser middleware ko istemal karti hain jo POST requests ke data ko parse karti hai. Yeh limit aur extended properties ko use kar ke request body ko limit karti hai aur complex objects ko parse karti hai.

8. app.use(cors());: Cors middleware Cross-Origin Resource Sharing (CORS) ko handle karta hai, allowing ya blocking requests based on their origin. Ye dusri domains se aane wale requests ko allow karne ya block karne mein madadgar hota hai.

9. Jab aap `app.use("/assets", express.static(path.join(__dirname, 'public/assets')));` ko istemal karte hain, to iska matlab hai ke aapki server par mojood `public/assets` directory mein jo bhi files hain, woh publicly accessible (publicly serve) ho jayengi.

Yahan "/assets" endpoint specify karta hai ke files kaise access ki jayengi. Agar aapka server `http://example.com` par chal raha hai aur aap "/assets/image.jpg" endpoint par request bhejte hain, to Express.js server `public/assets` directory mein `image.jpg` file ko dhundhega aur client ko send karega.

Is tarah se, aap apne frontend code mein `<img>` tags, CSS files, JavaScript files, ya kisi aur resource ke URLs ke liye "/assets" endpoint ka istemal kar sakte hain. Yeh aapko apne files ko organize karne aur unhein easily reference karne ki permission deta hai. Is technique se aap apne static files ko organize kar ke, client-side code (jese ke HTML, CSS, JavaScript) ko server par store kar sakte hain taake wo publicly accessible ho sakein.

Yeh sab configurations aur middleware aapki Node.js application ki functionality aur security ko improve karne mein madad karti hain.

## MONGOOSE SETUP

1. const PORT = process.env.PORT || 6001;: Yeh line server ke liye port specify karti hai. Agar aapne environment variable PORT set ki hui hai toh usse use karega, warna default taur par 6001 port par server chalega.

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, }): Yeh line MongoDB database se connect hone ke liye mongoose library ka istemal karti hai. process.env.MONGO_URL environment variable mein database ki connection string hoti hai. useNewUrlParser aur useUnifiedTopology options MongoDB ke new versions ke sath compatibility maintain karne ke liye hoti hain.

.then(() => { app.listen(PORT, () => console.log(Server port: ${PORT})); }): Yeh code mongoose successfully database se connect hone ke baad server ko start karta hai. app.listen function Express.js server ko PORT par listen karne ke liye configure karta hai. Jab server successfully start hota hai, to console par "Server port: {PORT}" message print hota hai.

.catch((error) => console.log(${error} nahi juda)): Agar MongoDB se connect karne mein koi error aata hai toh yeh code us error message ko console par print karta hai, jisse developers ko pata chal sake ke connection mein konsi problem hai.

## routes with files

1. Is code mein "/auth/register/" endpoint par aane wali POST requests ko handle karne ke liye ek route define ki gayi hai. Is route mein upload.single("picture") multer middleware istemal ki gayi hai jo ek file ko handle karta hai. Ye middleware "picture" naam ke form field se aane wale files ko handle karta hai. Jab yeh route par POST request aati hai, multer middleware file ko parse karta hai aur phir request object mein req.file property ke zariye file ki details provide karta hai. Is file ko phir "register" naam ke controller function ya endpoint logic mein bheja jata hai, jahaan se aap file ke saath jo bhi action karna chahte hain, woh logic define hota hai.

2. "Routes" web applications mein specific URLs (Uniform Resource Locators) ke liye define kiye gaye paths hote hain. Ye paths specify karte hain ke jab koi user aik specific URL par request karta hai, to us request ka response kya hona chahiye.

Express.js mein, routes ko define karne ke liye express.Router() object ka istemal hota hai. Routes ka main aim hota hai incoming requests ko handle karna, specific actions perform karna, aur phir appropriate response bhejna.

Yahan ek basic example hai routes ka istemal karte hue:
/ route sirf root URL ke liye hai, jab koi user sirf domain name (jese ke http://example.com/) par request karta hai, to us route ka response milta hai.
/about route /about URL ke liye hai, jab user http://example.com/about par request karta hai, to us route ka response milta hai.
/users/:userId route dynamic hai, yeh /users/ ke baad kisi bhi user ID ke liye response provide karega. For example, http://example.com/users/123 par request karte hue, 123 user ID ke liye response milta hai.
Routes aapki application ke different parts aur functionalities ko organize karne mein madad karte hain, taki incoming requests ka sahi response diya ja sake.

3. Ji haan, aapka kaha hua code snippet `app.post("/auth/register/", upload.single("picture"), register);` Express.js mein aik POST request ke route ko define kar raha hai. Is route ka structure yeh hai:

- **HTTP Method:** POST
- **URL Path:** "/auth/register/"
- **Middleware:** `upload.single("picture")` multer middleware hai jo single file upload ko handle karta hai. "picture" yahan form field ka naam hai jismein file upload ki gayi hai.
- **Controller/Endpoint Function:** `register` yeh function endpoint ya controller hai jo is route par aane wale requests ka logic handle karega.

Jab bhi koi user `POST` request bhejta hai `/auth/register/` URL par, Express.js server `upload.single("picture")` middleware ke zariye file ko parse karta hai, phir request object mein `req.file` property mein file ki details provide karta hai. Us file ko phir `register` function ya endpoint logic mein bheja jata hai, jahaan aap file ke saath jo bhi actions perform karna chahte hain, woh logic define hota hai.

## models folder

1. Yeh code ek user ke liye MongoDB schema define karta hai. User ke data ko MongoDB database mein store karne ke liye mongoose.model method ka istemal hota hai. Schema mein har field ka type aur constraints specify kiye gaye hain jaise ke required hona, minimum aur maximum length, unique hona, etc. Is tarah se, MongoDB database mein users ke data ko organize aur store kiya ja sakta hai.
2. `('User', UserSchema);` mein `'User'` ek string hai jo MongoDB collection ka naam specify karta hai, jabki `UserSchema` ek variable hai jo schema definition ko represent karta hai.

Jab aap MongoDB mein data store karte hain, aapko specify karna hota hai ke data kis collection mein jayega. Collection ka naam `'User'` string ke form mein diya gaya hai. Yani ke MongoDB mein aapka data `"User"` collection mein store hoga.

`UserSchema` ek JavaScript object hai jismein aapne define kiya hai ke `'User'` collection mein kis tarah ke documents store honge. Schema define kar ke aap specify kar rahe hain ke har document mein kya kya fields honge aur un fields ki properties kya kya hongi.

Yeh dono cheezein alag-alag kaam karti hain - `'User'` collection ka naam specify karta hai aur `UserSchema` schema ko represent karta hai. Is tarah se, aap MongoDB mein data ko organize karne ke liye schema define karte hain aur fir us schema ko ek collection ke sath associate karte hain taki data MongoDB mein store ho sake.

## controllers
1. Upar diye gaye code mein bcrypt library ka istemal password ko secure banane ke liye kiya gaya hai. User ke data ko User model ka istemal kar ke MongoDB mein save kiya jata hai. Agar user successfully register ho jaata hai toh 201 Created status code ke saath uski details JSON format mein client ko bheji jaati hai. Agar koi error aata hai toh 500 Internal Server Error status code ke saath error message bheji jaati hai.

## routes
1. app.use('/auth', authRoutes);
2. Yeh line keh rahi hai ke agar koi bhi request aati hai jismein URL /auth se shuru hoti hai, toh us request ko authRoutes wale routes ke liye forward karo. Yahan app Express.js application object ko represent karta hai, jo ke aapne create kiya hua hai, aur authRoutes woh routes hai jo authentication ke liye banaye gaye hain.

Iska matlab hai ke agar aapke Express.js application mein /auth/register ya /auth/login jaise URLs defined hain authRoutes mein, toh jab bhi koi user in URLs par request karega, Express.js us request ko authRoutes wale specific routes ke liye bhejega. Is tarah se, aap apne code ko modularize kar sakte hain aur different functionalities ke liye alag-alag routes files ka istemal kar sakte hain.

## logging in
1. Request Handling (Request Se Data Extract Karna):

req.body se email aur password extract kiye jaate hain jo client ne bheja hai.
User Dhoondhna (Finding User in Database):

User.findOne({ email: email }) se database mein user ko email ke basis par dhoonda jaata hai.
User Ki Existence Check (User Ki Mojudgi Ka Check):

Agar user mojood nahi hai, toh User mojood nahi hai message ke saath 400 Bad Request status code bheja jaata hai.
Password Match Karana (Matching Passwords):

bcrypt.compare(password, user.password) se client dwara diya gaya password aur database mein stored password compare kiya jaata hai.
Invalid Credentials Check (Ghalat Creds Ka Check):

Agar passwords match nahi karte, toh Ghalat Creds message ke saath 400 Bad Request status code bheja jaata hai.
JWT Generate Karna (Generating JSON Web Token):

Agar user aur password match karte hain, toh jwt.sign({ id: user._id }, process.env.JWT_SECRET) se JSON Web Token generate kiya jaata hai jismein user ka ID hota hai.
Password Remove Karna (Removing Password for Security):

delete user.password se user object se password property hata di jaati hai, taki wo client ko response mein nahi dikhe (security ke liye).
Response Bhejna (Sending Response):

res.status(200).json({ token, user }); se client ko 200 OK status code ke saath token aur user ki details bheji jaati hain.

## middleware folder
1. Token Extract Karna (Extracting Token):

req.header("Authorization") se request headers se "Authorization" header se token extract kiya jaata hai.
Token Ki Mojudgi Check Karna (Checking Token Existence):

Agar token mojood nahi hai, toh client ko "Access Denied" message ke saath 403 Forbidden status code bheja jaata hai.
"Bearer " Hatana (Removing "Bearer " Prefix):
Yeh code tab kaam aata hai jab client request me se token ko "Authorization" header ke through bheja jata hai. Common practice hai ke tokens ko "Bearer" prefix ke sath bheja jata hai, jaise ke "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...". Lekin, actual token verify karne ke liye, hume sirf token ki zaroorat hoti hai, "Bearer" prefix nahi chahiye.

Is code mein startsWith("Bearer ") function yeh check karta hai ke token string "Bearer " se start hota hai ya nahi. Agar haan, matlab token "Bearer " ke saath shuru hota hai. Toh, slice(7, token.length) function se yeh "Bearer " prefix hata diya jata hai. trimLeft() function ka istemal whitespace characters ko remove karne ke liye kiya gaya hai, jisse clean token bache jo verify karne ke liye istemal kiya jayega.

Jaise ke:

Original Token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
Token After slice(7, token.length): "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
Is tareeqe se, startsWith("Bearer ") aur slice(7, token.length).trimLeft() ka istemal kiya jata hai takay hum sirf actual token ko extract kar sakein aur usko verify kar sakein.

Agar token "Bearer " se shuru hota hai, toh token.startsWith("Bearer ") se check kiya jaata hai. Agar haan, toh "Bearer " hata diya jaata hai taake sirf actual token bache.
Token Ko Verify Karna (Verifying Token):

jwt.verify(token, process.env.JWT_SECRET) se token ko verify kiya jaata hai. Agar token sahi hai, toh verified user ki details verified variable mein store ho jaati hain.
User Ki Details Request Object Mein Add Karna (Adding User Details to Request Object):

Verified user ki details ko req.user mein add kiya jaata hai taki future route handlers unka istemal kar sakein.
Agla Middleware/Routes Ko Bulana (Calling Next Middleware/Routes):

Agar token verify ho jaata hai, toh next() function ko call kiya jaata hai jisse agla middleware ya route handler bulaya ja sake.
Error Handling (Error Ko Handle Karna):

Agar token verify nahi ho paata ya koi aur error aata hai, toh res.status(500).json({ error: error.message }) se server error status code (500) ke saath error message bheji jaati hai.