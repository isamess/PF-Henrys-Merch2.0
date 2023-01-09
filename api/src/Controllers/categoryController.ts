import {category} from '../utils/types';
import {Category} from '../models/Category';


export const getAllCategories = async () => {
	const result = await Category.find({});
	return result;
}

export const getCategoryById = async (id:string) => {
	const result = await Category.findOne({_id: id});
	return result;
}

export const addNewCategory = async (category: category) => {
	const categoryFind = await Category.findOne({name: category.name});
	if(!category.name) throw new Error('information missing'); 
	else if(categoryFind) throw new Error('category already exists');
	else{
		const result = await Category.create({name: category.name});
		return result;
	}
};
