import React from 'react'
import {Row, Col} from 'antd'
import SearchLeftOption from './searchleftoption'
function SearchPageRevision1 () {
  return (
    <>
      <Row type="flex" justify="center">
        <Col xl={{ span: 18, offset: 3 }} >
          <SearchLeftOption />
        </Col>
      </Row>
    </>

  )
}

export default SearchPageRevision1