import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/card-view/Card';
import Fact from './components/card-view/Fact'
import './styles/global.css'
import SearchBar from './components/search-bar/SearchBar';

function App() {
  const cats = [{
    id: 1,
    name: 'Max',
    imgUrl: 'https://i.pinimg.com/originals/4d/47/fe/4d47feec5b84a8468296adf22d7fc938.jpg', coat: 'Tabico'
  },
  {id: 2, name: 'Amy', imgUrl: 'https://i.redd.it/4l29mxgreag31.jpg', coat: 'Tuxedo'}, 
  {id: 3, name: 'Juliet', imgUrl: 'https://www.bubblypet.com/wp-content/uploads/2021/08/Potrait-of-fluffy-dilute-calico-cat-sitting-at-home.jpg', coat: 'Calico'}, 
  {id: 4, name: 'Smokey', imgUrl: 'https://www.photos-public-domain.com/wp-content/uploads/2011/02/gray-tabby-cat-in-cardboard-box.jpg', coat: 'Tabby'}, 
  {id: 5, name: 'Willy', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfEPn89AgNVy_lZwIwO-Z5GP8mKMhP1OkAQ&usqp=CAU', coat: 'Tabico'}, 
  {id: 6, name: 'Spiffy', imgUrl: 'https://www.litter-robot.com/blog/wp-content/uploads/2020/09/tatiana-rodriguez-VDaTIMWsc_8-unsplash.jpg', coat: 'Tuxedo'},
  {id: 7, name: 'Ana', imgUrl: 'https://petsocialworker.org/wp-content/uploads/2019/02/Ringo.jpg', coat: 'Tan'},
  {id: 8, name: 'Indi', imgUrl: 'https://excitedcats.com/wp-content/uploads/2020/12/muzzle-of-a-brown-domestic-cat_Karrtinki_shutterstock.jpg', coat: 'Tabby'},
  {id: 9, name: 'Spot', imgUrl: 'https://cattitudedaily.com/wp-content/uploads/2020/08/tortie-2-scaled.jpg', coat: 'Tortie'},
  {id: 10, name: 'Mr. Kitty', imgUrl: 'https://www.thesprucepets.com/thmb/Kh-xt27-hqeQzhyr9288cl_P64I=/1396x1396/smart/filters:no_upscale()/twenty20_f84c633e-705e-4bf8-a724-00cdea750d8d-590b51893df78c92837b18d6.jpg', coat: 'Dog'}, {id: 11, name: 'Winnie', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Short-haired_tortoiseshell_cat.jpg/1200px-Short-haired_tortoiseshell_cat.jpg', coat: 'Tortie'}, {id: 12, name: 'Ellie', imgUrl: 'https://images.ctfassets.net/440y9b545yd9/5atEcAq0ymbcZs1GzyRbci/0b4b8acf848bf3f5a069ad68d8d160c2/tortoiseshell-cats.jpg', coat: 'Tortie'}
];

  const [searchValue, setSearchValue] = useState("")

  const filteredCats = cats.filter((cat) => {
    return (cat.name.toUpperCase().includes(searchValue.toUpperCase()) || cat.coat.toUpperCase().includes(searchValue.toUpperCase()))
  })

  return (
    <div className="page-wrapper">
        <div className="top-nav">
          <SearchBar searchValue={setSearchValue} />
        </div>
        <div className="container">   
        {searchValue && <span className="italic filter-by-text secondary-title">Filter by: "{searchValue}"</span>}     
        <div className="card-view">
          {filteredCats.map((cat) => {
            return <Card catData={cat} key={cat.id}/>
          })}
        </div>

      </div>
    </div>

  )
}

export default App;
