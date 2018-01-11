import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const MoneyBook = () => {
  const books =[
  {date:"1/1", item:"お年玉", amount:1000},
  {date:"1/3", item:"ケーキ", amount:-500},
  {date:"2/1", item:"お小遣い", amount:3000},
  {date:"2/5", item:"マンガ", amount:-600},
  ]
  return(
     <div>
       <title>小遣い帳</title>
        <table className='book'>
          <thead>
          <tr>
            <th>日付</th>
            <th>頃目</th>
            <th>入金</th>
          </tr>
         </thead>
         <tbody>
         {books.map((book) =>
         <MoneyBookItem book = {book} key = {book.date+book.item} /> )}
         </tbody>
        </table>
      </div>
     )
}

const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book
    if(amount > 0){
      return(
          <tr>
            <td>{date}</td>
            <td>{item}</td>
            <td>{amount >= 0 ? amount : null}</td>
            <td>{amount < 0 ? -amount : null}</td>
          </tr>
          )
    }else{
      return(

          <tr>
            <td>{date}</td>
            <td>{item}</td>
            <td></td>
            <td>{-amount}</td>
          </tr>

          )
    }
}

MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired
}

ReactDOM.render(
    <MoneyBook />,
    document.getElementById('root')
)
