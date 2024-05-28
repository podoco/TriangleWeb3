import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import logo from './logo.svg'
import './App.css'

import Text from './components/shared/Text'
import { Button } from './components/shared/Button'
import Input from './components/shared/input'

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="primary" weak>
          클릭해주세요
        </Button>
        <Button full={true} color="success">
          클릭해주세요
        </Button>
        <Button color="success" full={true} disabled={true}>
          클릭해주세요
        </Button>
        <Input placeholder="로그인" aria-invalid={false} />
        <Input aria-invalid={true} />
      </div>
    </div>
  )
}

export default App
