import React, { useState } from 'react'
import './Category.scss'

function Category({title}) {

  return (
    <div className={title === 'Men' ? 'CategoryMen' : 'Category'}>
      <div className="content center">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default Category