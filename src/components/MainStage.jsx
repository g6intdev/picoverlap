import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'

function MainStage({ pics, picOpacity }) {
  return (
    <>
      <a>hello</a>
      {pics.map(cFile =>
        <Image src={cFile} style={{ opacity: picOpacity }} fluid />

      )}
    </>

  )
}

export default MainStage