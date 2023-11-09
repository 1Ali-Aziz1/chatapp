import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import {
  incrementByAmount,
} from '../../slices/counterSlice'


function Sidebar() {

  function SelectChat(i) {
    useDispatch(incrementByAmount(i))
  }

  var indents = [];
  for (var i = 0; i <= 50; i++) {
    indents.push(<MessageRoom onClick={SelectChat(i)}>
      <ProfilePicture><ProfilePictureImage src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='></ProfilePictureImage></ProfilePicture>
                <ProfileName>kdjasf_{i}</ProfileName>
              </MessageRoom>);
  }
  
  function ShowMessageRooms() {
    return indents;
  }

  return (
    <div>
      <Container>
        <Searchbar placeholder='Search...'/>
        <Line></Line>
        <ShowMessageRooms></ShowMessageRooms>
        {/* {ShowMessageRooms()} */}
      </Container>
    </div>
  )

  
}

const Container = styled.div `
    background: white;
    width: 15vw;
    height: 100vh;
    box-shadow: 2px 0px 10px gray;
    text-align: center;
    align-items: center;
    position: stick;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
`;

const ProfileName = styled.p `
  display: flex;
  width: 41px;
  margin-top: 3%;
  margin-left: 2%;
`

const ProfilePictureImage = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const MessageRoom = styled.div `
    border: 0px solid black;
    width: 99%;
    margin-top: 5px;
    // box-shadow: 0 5px 10px 0 gray, 0 0 5px 0 gray;
    box-shadow: 1px 1px 3px gray;
    height: 35px;
    position: relative;
    display: flex;
    text-align: center;
    &:hover{
    box-shadow: 5px 5px 5px gray;
    border-top: 1px;
    background: rgb(255, 255, 255);
  }
`
const ProfilePicture = styled.div `
    height: 30px;
    position: relative;
    width: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin-left: 2%;
    margin-top: 1%;
    object-fit: contain;
`
const Line = styled.hr `
    margin-top: 10%;
`;
const Searchbar = styled.input`
    width: 80%;
    margin-top: 10px;
    border: none;
    border-left: 0.5px solid grey;
    border-radius: 15px;
    height: 30px;
    // box-shadow: 5px 5px 5px gray;
    box-shadow: 0 5px 10px 0 gray, 0 0 40px 0 gray;
    color: black;
    border-property: none;
    text-align: center;
    &:focus {
      outline: none;
    } 
`
export default Sidebar
