## Project Management Dashboard Develop Guild

### Install and Run
1. Install all dependencies
```
npm install
yarn start
```

2. Use mockserver before backend service is ready
```
cd src/mockserver
npm install
node server.js
```
- please be noted that some of the api address is changed, you need check it first

3. Switch between mockserver and backend service
- mockserver runs in `localhost:3003` and backend service now deployed in `http://192.168.77.107:9999`, if the url of backend service changed you need update the url in `package.json` and run `npm install`
- check url in `src/features/xxxSlice.js` file to see whether it is correct

### Develop - Create a new dashboard
- Firstly, you need to create a reducer file like `xxxSlice.js` in `src/features` folder and here you will put all backend data fetch related code. To know how this file works, you should have some background knowledge of [Redux](https://redux.js.org) and [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- Then, config the reducer in `src/app/store.js`
- Thirdly, create a new folder like `xxDashboard` or `xxComponents` under `src` to put new dashboard and related components
- Lastly, add this new dashboard to `src/App.js` and set proper router