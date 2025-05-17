const loggerMiddleware = store => next => action => {
    console.log('Action:', action);
    console.log('State before action:', store.getState());
    const result = next(action);
    console.log('State after action:', store.getState());
    
    return result;
    };
    
    export default loggerMiddleware;