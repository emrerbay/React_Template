#### Pre Requisite

You must have npm installed before setting up this project.

- **npm** : ^6.0.0
- **json-server**: v.x
- **nodejs**: ^10.19.0
<!-- Only if you are using mock data -->
- **json-server**: npm install -g json-server

#### Stack

- Bundler: **Parcel**
- Transpiler: **Babel**
- Framework: **React.JS**
- State Manager: **Redux-toolkit**
- State Mutations: **Immer**
- Component Suite: **Kendo React**

#### Installation

``` bash
# clone the repo
$ git clone https://gitlab.tpao.gov.tr/acalbayrak/fe-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```
#### Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm run dev
```

``` bash
# json server  with hot reload at http://localhost:3002
$ npm run mockdb
```

``` bash
# Delete following folders and files: .cache/ dev/ node_modules/ dist/ 
$ npm run clean
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

#### Build

Run `build` to build the project. The build artifacts will be stored in the `dist/` directory.

```bash
# build for production with minification
$ npm run build
```

#### What's included

Mock folder can be deleted if not used.

```
Fe-Template#v1.0.0
├── mock/            #static files
│   └── db.json      #mock data
│
├── src/             #project root
│   ├── api/         #api source
│   ├── assets/      #assets
│   ├── components/  #common components
│   ├── containers/  #container source
│   ├── redux/       #redux elements
│   ├── scss/        #user scss/css source
│   ├── utils/       #utilities
│   ├── views/       #views source
│   ├── _nav.js      #sidebar config
│   ├── App.jsx      #App.jsx
│   ├── App.scss     #style for App.jsx
│   ├── index.css    #style for index.jsx
│   ├── index.html   #root index.html
│   ├── index.jsx    #index.jsx
│   └── routes.js    #routes config
│
└── package.json
```

#### Documentation
 
 This template is created from coreui react admin template and revised based on specific needs. 

 https://github.com/coreui/coreui-free-react-admin-template

 For documentation of coreui components, please check the website below:

 https://coreui.io/docs/2.1/getting-started/introduction/

#### Adding Views

- Create your component in `views` Folder. Follow the folder structer. If you are using a common component, create it in `components` folder.
- Add a menu link in the sidebar, check `_nav.js`. Url value should match the path in `routes.js`.
- And finally add a route in `routes.js` file. Path value should match the url in `_nav_.js`.
- In a view component, create your content in `CardBody` tags. A component generally returns like below:

``` bash
return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>Sample Page</CardHeader>
        <CardBody>
          ...
        </CardBody>
      </Card>
    </div>
  )
```

#### Adding API's

- Add your api components in `api` folder.

### Adding Assets

- Add your assets in `assets` folder.

### Adding Containers

- Add your containers in `containers` folder. Follow the folder structure.

### Adding Redux Slice

- Add your slice component in `redux/slices` folder and then import it in `rootReducer.jsx`. 
- Also import your slice actions in `actions.js`.

### Adding Styles

- Add your custom styles in `scss/_custom.scss` folder. 
- Also you can create common Styled Components in `components/Styled.jsx`.

### Adding Utility Components

- Add your utility component in `utils` folder.
