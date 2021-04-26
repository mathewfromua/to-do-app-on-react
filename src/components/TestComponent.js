import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incrementValue, decrementValue } from "../reduxStore/counter/actions";


const TestComponent = () => {
	// const params = useParams();
	// console.log(params);
	const params = useParams();

	const { value } = useSelector((state) => state.counterReducer)
	const dispatch = useDispatch()
	return (
		<div>
			<h1>SLUG SLUG SLUG</h1>
			<p>{params.slug}</p>
		</div>
	)
};

export { TestComponent };