<a name="readme-top"></a>

# oadb_webtool
 webtool to support opioid agonist/antagonist database management. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
PostgreSQL folder: scripts and data for database.
OADB_Webtool Folder: code for web tool.
To get a local copy up and running follow these steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them. PostgreSQL, NodeJS are required tools.

PostgreSQL version: 13.4

Nodejs version: 16.13.0


### Install PostgreSQL

As an open source object-relational database management system, PostgreSQL available for MacOS, Linux, and Windows.

##### Goal for each Operating System
The goal will be to run the following command successfully from the command line (regardless of the OS):

```psql -U postgres```

This should open the psql interactive shell and print a prompt that looks like:

```postgres=# ```

##### Installation per OS:

- ###### MacOS:

Let's walk through installing PostgreSQL with the postgresapp on Mac.

1) Visit http://postgresapp.com/
2) Download the most recent version --> Click "Download"
3) Open the application, and click "initialize" to create a new PostgreSQL server
4) Ensure that the Postgres.app bin folder has been added to your $PATH;
  4.1) In the command line, enter: `echo "$PATH"`
  4.2) Search through the output and make sure Postgres.app/Contents/Version/latest/bin is there
       in order to ensure that this directory's executables are callable from any directory in bash.
5) In the command line, enter: `lsof -i tcp:5432`, and ensure that the postgres `COMMAND` appears.
   This checks if the Postgres server is now running on port 5432 under the name `localhost:postgresql`
   
   
- ##### Windows:
1) Download the installer specified by EnterpriseDB for all supported PostgreSQL versions. The installer is available here:
  https://www.postgresql.org/download/windows/

If the installation was successful, you should be able to run the following command.

    $ postgres -V
    postgres (PostgreSQL) 13.4
  
    
    
### Install NodeJS

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

- ##### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ##### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- ##### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    16.13.0

    $ npm --version
    8.10.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Yarn installation

  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn


---
<!-- INSTALL STEPS -->
## Install Steps
First download the repo.

1. Clone the repo
   ```sh
   git clone [https://github.com/your_username_/Project-Name](https://github.com/FANMISUA/oadb_webtool).git
   ```
   
### Installation SQL

2. Create and Connect Database. 

   Change the path to your sql script absolute path.
   ```sh
   psql -U postgres  -f 'C:/temp/data/test_oadb/createDatabase.sql'
   ```
   create database scripts screenshot.
   ![psqlinstall1](https://user-images.githubusercontent.com/12943354/204495005-0e5be89f-70e0-4e53-8066-9776338ad6f4.png)
   
3. Create tables

   ```js
   psql -U postgres -d oadb -f 'createTable.sql'
   ```
   create table scripts screenshot.
   ![psqlinstall2](https://user-images.githubusercontent.com/12943354/204495032-67d5ea37-2f90-43ea-bf7d-a6aca3e00a5c.png)

4. Load data into tables
   unzip the csv files to the same place for sql scripts.
   
   ```js
   psql -U postgres -d oadb -f 'loadData.sql
   ```   
   load data scripts screenshot.
   ![psqlinstall3](https://user-images.githubusercontent.com/12943354/204495052-fafb7cb1-3ac9-4cf0-a7c1-aaa80a5b7ed3.png)

5. you can also use the following scripts to load data into to each table seperately.

   ```js
   \copy Chemical FROM '.\FinalChemicalTable.csv' with delimiter as ',' CSV HEADER;
   \copy Reference FROM '.\FinalReferenceTable.csv' with delimiter as ',' CSV HEADER;
   \copy Assay FROM '.\FinalAssayTable.csv' with delimiter as ',' CSV HEADER;
   \copy Data FROM '.\FinalDataTable.csv' with delimiter as ',' CSV HEADER;
   ```
   

### Installation React web tool

_Below is the example of how you can install and set up the webtool and database on your local machine._

5. Install modules for server
   ```sh
   cd server
   yarn add express pg cors
   ```

6. Install modules for client
   ```sh
   cd client
   yarn add react antd react-router-dom@6 ketcher-react @mui/icons-material @emotion/react @emotion/styled react-highlight-words smiles-drawer
   ```

7. Run server
   ```sh
   cd server
   nodemon index
   ```
   run server script screenshot.
   ![run server](https://user-images.githubusercontent.com/12943354/204495109-31318718-c268-46ee-9531-7b33bdcaaf09.png)
   
8. Run Client
   ```sh
   cd client
   npm run start
   ```
   run client script screenshot.
   ![run client](https://user-images.githubusercontent.com/12943354/204495136-a65d8345-1d49-4709-8ae9-d1debbbaa503.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Webtool Frontpage
##### webtool frontpage screenshot.

![frontpage2](https://user-images.githubusercontent.com/12943354/204484652-573d7572-1713-4d02-96bd-c129c177bfb7.png)

##### webtool searchpage screenshot.

![frontpage1 (1)](https://user-images.githubusercontent.com/12943354/204484128-dc8fbe28-46f5-48c8-924b-7c153ad164c4.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Fan Dong - [fan.dong@fda.hhs.gov]

Project Link: [https://github.com/FANMISUA/oadb_webtool](https://github.com/FANMISUA/oadb_webtool)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
