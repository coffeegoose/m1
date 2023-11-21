import React, { FC, useState, useEffect } from "react"

import styled from "@emotion/styled"

import * as Settings from "./settings"

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid black;
`
const StyledTime = styled.div`
  font-size: 30px;
`
const StyledDate = styled.div`
  font-size: 15px;
`

export const Clock: FC = () => {
  const campm: boolean = Settings.clockSettings.amPM || true
  
  let time = ""
  if (campm == true) time = new Date().toLocaleString('en-AU', { timeStyle:	"medium", hour12: false })
  else if (campm == false) time = new Date().toLocaleString('en-AU', { timeStyle:	"medium", hour12: true })
  const [ctime, setTime] = useState<string>(time)
  let date = new Date().toLocaleString('en-AU', {weekday: "short" })+" "+new Date().toLocaleString('en-AU', { dateStyle: "medium"})
  const [cdate, setDate] = useState<string>(date)
 
  const UpdateTime = () => {
    if (campm == true) time = new Date().toLocaleString('en-AU', { timeStyle:	"medium", hour12: false })
    else if (campm == false) time = new Date().toLocaleString('en-AU', { timeStyle:	"medium", hour12: true })
    setTime(time)
    const date = new Date().toLocaleString('en-AU', {weekday: "short" })+" "+new Date().toLocaleString('en-AU', { dateStyle: "medium"})
    setDate(date)
  }

  useEffect(() => {
    const interval = setInterval(UpdateTime, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Wrapper>
      <StyledTime>{ctime}</StyledTime>
      <StyledDate>{cdate}</StyledDate>
    </Wrapper>
  )
}
