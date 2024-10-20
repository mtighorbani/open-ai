import IApplicationState from '../IApplicationState';
import { TypedUseSelectorHook, useSelector, shallowEqual } from 'react-redux';

// App
//

const useAppSelector: TypedUseSelectorHook<IApplicationState> = selector =>
    useSelector(selector, shallowEqual);
export default useAppSelector;
