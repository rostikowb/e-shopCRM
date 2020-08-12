import React from 'react';
import {Component} from 'react';
import s from './search.module.css';
// import Button from "@material-ui/core/esm/Button/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


//
// function rechangeItem() {
//     document.getElementsByClassName('.searchBox')[0].style.width = '40%';
// }

export default class Search extends Component{
    // state = {
    //     isWidth: '22vw'
    // };

    // changeItem = () => {
    //     this.state.isWidth === '22vw' ?
    //         this.setState({isWidth: '100%'}) :
    //         this.setState({isWidth: '22vw'});
    // };

    render() {
        // const {isWidth} = this.state;
        return (
            <form className={s.searchBox} noValidate autoComplete="off">
                <div  className={s.search}>
                    <input className={s.searchInput} name="search" placeholder="я ищу..."
                           type="search"/>
                    <FontAwesomeIcon className={s.searchIcon} icon={faSearch}/>
                    {/*<Button className={s.btnSearchStart} size="large" color="secondary">Шукати</Button>*/}
                    <button className={s.btnSearchStart}>ИСКАТЬ</button>
                </div>

            </form>
        )
    }
}

