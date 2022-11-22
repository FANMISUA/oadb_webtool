<a name="readme-top"></a>

# oadb_webtool
 webtool to support opioid agonist/antagonist database management. 

 PostgreSQL folder: scripts and data for database.
 
 OADB_Webtool Folder: code for web tool.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them. PostgreSQL, NodeJS are required tools.


##### Install PostgreSQL. 

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
   
- ##### Linux:

1) Acquire the source code: `wget ftp://ftp.postgresql.org/pub/source/v9.3.2/postgresql-9.3.2.tar.bz2`
2) Install the packages needed for building Postgres:
   `sudo apt-get install build-essential libreadline-dev zlib1g-dev flex bison libxml2-dev libxslt-dev libssl-dev`

- ##### Windows:
1) Download the installer specified by EnterpriseDB for all supported PostgreSQL versions. The installer is available here:
  https://www.postgresql.org/download/windows/


### NodeJS

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
    v8.11.3

    $ npm --version
    6.1.0

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

_Below is an example of how you can install and set up database on your local machine._

2. Create and Connect Database
   ```sh
   CREATE DATABASE oakdb
   \C oakdb
   ```
3. Load SQL scripts to create tables
   ```js
   psql -U your_username -d dbname -f create_oadb.sql
   ```
   
4. Load data to tables
   ```js
   \copy Chemical FROM '.\FinalChemicalTable.csv' with delimiter as ',' CSV HEADER;
   \copy Reference FROM '.\FinalReferenceTable.csv' with delimiter as ',' CSV HEADER;
   \copy Assay FROM '.\FinalAssayTable.csv' with delimiter as ',' CSV HEADER;
   \copy Data FROM '.\FinalDataTable.csv' with delimiter as ',' CSV HEADER;
   ```

### Installation React web tool
_Below is an example of how you can install and set up the webtool and database on your local machine._

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
   
8. Run Client
   ```sh
   cd client
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Webtool Frontpage

demo image.

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Fan Dong - [fan.dong@fda.hhs.gov]

Project Link: [https://github.com/FANMISUA/oadb_webtool](https://github.com/FANMISUA/oadb_webtool)


<p align="right">(<a href="#readme-top">back to top</a>)</p>
