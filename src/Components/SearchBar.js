import { useEffect, useState } from 'react';

const SearchBar = ({list, setList, filterField = item => item, ...props}) => {
	const [value, setValue] = useState("");

useEffect(() => {
	if (value) {
	setList(filterList())
	}
	else {
	setList(list)
	}
	}, [value])

const filterList = () => {
	return list.filter(item => filterField(item).toLowerCase().includes(value.toLowerCase()))
	}

const handleChange = event => {
	setValue(event.target.value)
}

return (
 <input type="text" placeholder="Search..." name="search" onChange={handleChange} value={value} {...props} />
)
}

export default SearchBar;