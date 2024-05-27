import { useState } from 'react';
import './searchBar.scss';

const SearchBar = () => {
    const [active, setActive] = useState({type:"Buy"})
    const switchTab = (val)=>{
        setActive({type:val})
    }
    const typeBtns = ['Buy', 'Rent']
  return (
    <div className='searchBar'>
        <div className="type">
            {typeBtns.map((typeBtn)=>
            <button className={active.type===typeBtn? 'active' : ''} onClick={()=>{switchTab(typeBtn)}} key={typeBtn}>{typeBtn}</button>
            )}
        </div>
        <form action="">
            <input type="text" name="location" id="" placeholder='City Location'/>
            <input type="number" name="minPrice" id="" min={0} max={100000000} placeholder='Min Price'/>
            <input type="number" name="maxPrice" id="" min={0} max={100000000} placeholder='Max Price'/>
            <button>
                <img src="assets/search4.svg" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar