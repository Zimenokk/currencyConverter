import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {updateCurrencyActions} from "../store/updateCurrencySlice";

const allActions = {
    ...updateCurrencyActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};