import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemsContainer = styled.div``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`

export const ScoreCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  margin: 15px;
  width: 110px;
`

export const ParagraphScore = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ScoreSpan = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin: 0;
`

export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50%;
  width: 100%;
  padding: 0px;
  flex-wrap: wrap;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px;
`

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`

export const RulesImageContainer = styled.div``

export const CloseLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CloseLineButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
