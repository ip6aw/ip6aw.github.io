import React from 'react';
import * as emoji from 'node-emoji';

const Message = React.createClass({
  // Setting propTypes ensure that your component is used correctly
  propTypes: {
    message: React.PropTypes.object
  },

  render() {
    // Destructuring pulls the different fields from
    // the message object
    const {name, message} = this.props.message;
    //var arrayLength, arrayOfMessage, i, change;
    //change = true;  
    var arrayOfMessage = message.split("");
   var arrayLength = arrayOfMessage.length;
    for (var i = 0; i < arrayLength; i++) {
      
        var r = Math.floor(Math.random()*4); //a
        var r1 = Math.floor(Math.random()*1);//b
        var r2 = Math.floor(Math.random()*3);//c
        var r3 = Math.floor(Math.random()*2);//d
        var r4 = Math.floor(Math.random()*3);//e
        var r5 = Math.floor(Math.random()*5);//f
        var r6 = Math.floor(Math.random()*2);//g
        var r7 = Math.floor(Math.random()*2);//h
        var r8 = Math.floor(Math.random()*3);//i
        var r9 = Math.floor(Math.random()*3);//j
        var r10 = Math.floor(Math.random()*5);//k
        var r11 = Math.floor(Math.random()*1);//l
        var r12 = Math.floor(Math.random()*6);//m
        var r13 = Math.floor(Math.random()*4);//n
        var r14 = Math.floor(Math.random()*4);//o
        var r15 = Math.floor(Math.random()*3);//p
        var r16 = Math.floor(Math.random()*2);//q
        var r17 = Math.floor(Math.random()*4);//r
        var r18 = Math.floor(Math.random()*7);//s
        var r19 = Math.floor(Math.random()*4);//t
        var r20 = Math.floor(Math.random()*3);//u
        var r21 = Math.floor(Math.random()*4);//v
        var r22 = Math.floor(Math.random()*4);//w
        var r23 = Math.floor(Math.random()*2);//x
        var r24 = Math.floor(Math.random()*3);//y
        var r25 = Math.floor(Math.random()*6);//z
        //var r = 1;
        if (arrayOfMessage[i] == "a") {
          switch(r) {
            case 0:
              arrayOfMessage[i] = "ai";
              break;
            case 1: 
              arrayOfMessage[i] = "au";
              break;
            case 2:
              arrayOfMessage[i] = "ey";
              break; 
            case 3:
              arrayOfMessage[i] = "a";
              break; 
            
             // default:
              //arrayOfMessage[i] = "1";
          }
        }
          else if (arrayOfMessage[i] == "b")
          {
            switch(r1) {
            case 0:
              arrayOfMessage[i] = "b";
              break;
            
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "c")
          {
            switch(r2) {
            case 0:
              arrayOfMessage[i] = "z";
              break;
            case 1: 
              arrayOfMessage[i] = "s";
              break;
            case 2:
              arrayOfMessage[i] = "c";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "d")
          {
            switch(r3) {
            case 0:
              arrayOfMessage[i] = "ed";
              break;
            case 1: 
              arrayOfMessage[i] = "d";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "e")
          {
            switch(r4) {
            case 0:
              arrayOfMessage[i] = "eh";
              break;
            case 1: 
              arrayOfMessage[i] = "ah";
              break;
            case 2:
              arrayOfMessage[i] = "e";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "f")
          {
            switch(r5) {
            case 0:
              arrayOfMessage[i] = "ff";
              break;
            case 1: 
              arrayOfMessage[i] = "ph";
              break;
            case 2:
              arrayOfMessage[i] = "ough";
              break; 
            case 3:
              arrayOfMessage[i] = "lf";
              break; 
            case 4:
              arrayOfMessage[i] = "f";
              break; 
            
            
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "g")
          {
            switch(r6) {
            case 0:
              arrayOfMessage[i] = "guh";
              break;
            case 1: 
              arrayOfMessage[i] = "g";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "h")
          {
            switch(r7) {
            case 0:
              arrayOfMessage[i] = "wh";
              break;
            case 1: 
              arrayOfMessage[i] = "h";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "i")
          {
            switch(r8) {
            case 0:
              arrayOfMessage[i] = "ay";
              break;
            case 1: 
              arrayOfMessage[i] = "eh";
              break;
            case 2:
              arrayOfMessage[i] = "i";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "j")
          {
            switch(r9) {
            case 0:
              arrayOfMessage[i] = "dge";
              break;
            case 1: 
              arrayOfMessage[i] = "g";
              break;
            case 2:
              arrayOfMessage[i] = "j";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "k")
          {
            switch(r10) {
            case 0:
              arrayOfMessage[i] = "c";
              break;
            case 1: 
              arrayOfMessage[i] = "ch";
              break;
            case 2:
              arrayOfMessage[i] = "qu";
              break; 
            case 3:
              arrayOfMessage[i] = "ck";
              break; 
            case 4:
              arrayOfMessage[i] = "k";
              break; 
            
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "l")
          {
            switch(r11) {
            case 0:
              arrayOfMessage[i] = "l";
              break;
           
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "m")
          {
            switch(r12) {
            case 0:
              arrayOfMessage[i] = "mm";
              break;
            case 1: 
              arrayOfMessage[i] = "mb";
              break;
            case 2:
              arrayOfMessage[i] = "mn";
              break;
            case 3:
              arrayOfMessage[i] = "lm";
              break; 
            case 4:
              arrayOfMessage[i] = "n";
              break; 
            case 5:
              arrayOfMessage[i] = "m";
              break; 
            
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "n")
          {
            switch(r13) {
            case 0:
              arrayOfMessage[i] = "nn";
              break;
            case 1: 
              arrayOfMessage[i] = "kn";
              break;
            case 2:
              arrayOfMessage[i] = "gn";
              break; 
            case 3:
              arrayOfMessage[i] = "n";
              break; 

             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "o")
          {
            switch(r14) {
            case 0:
              arrayOfMessage[i] = "uh";
              break;
            case 1: 
              arrayOfMessage[i] = "u";
              break;
            case 2:
              arrayOfMessage[i] = "a";
              break; 
            case 3:
              arrayOfMessage[i] = "o";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "p")
          {
            switch(r15) {
            case 0:
              arrayOfMessage[i] = "b";
              break;
            case 1: 
              arrayOfMessage[i] = "puh";
              break;
            case 2:
              arrayOfMessage[i] = "p";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "q")
          {
            switch(r16) {
            case 0:
              arrayOfMessage[i] = "kw";
              break;
            case 1: 
              arrayOfMessage[i] = "q";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "r")
          {
            switch(r17) {
            case 0:
              arrayOfMessage[i] = "rr";
              break;
            case 1: 
              arrayOfMessage[i] = "wr";
              break;
            case 2:
              arrayOfMessage[i] = "rh";
              break;
            case 3:
              arrayOfMessage[i] = "r"; 
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "s")
          {
            switch(r18) {
            case 0:
              arrayOfMessage[i] = "ss";
              break;
            case 1: 
              arrayOfMessage[i] = "c";
              break;
            case 2:
              arrayOfMessage[i] = "sc";
              break; 
            case 3:
              arrayOfMessage[i] = "ps";
              break;
            case 4:
              arrayOfMessage[i] = "st";
              break;
            case 5:
              arrayOfMessage[i] = "ce";
              break;
            case 6:
              arrayOfMessage[i] = "s";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "t")
          {
            switch(r19) {
            case 0:
              arrayOfMessage[i] = "tt";
              break;
            case 1: 
              arrayOfMessage[i] = "th";
              break;
            case 2:
              arrayOfMessage[i] = "d";
              break; 
            case 3:
              arrayOfMessage[i] = "t";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "u")
          {
            switch(r20) {
            case 0:
              arrayOfMessage[i] = "uh";
              break;
            case 1: 
              arrayOfMessage[i] = "oo";
              break;
            case 2:
              arrayOfMessage[i] = "u";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "v")
          {
            switch(r21) {
            case 0:
              arrayOfMessage[i] = "f";
              break;
            case 1: 
              arrayOfMessage[i] = "ph";
              break;
            case 2:
              arrayOfMessage[i] = "ve";
              break; 
            case 3:
              arrayOfMessage[i] = "v";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "w")
          {
            switch(r22) {
            case 0:
              arrayOfMessage[i] = "wh";
              break;
            case 1: 
              arrayOfMessage[i] = "u";
              break;
            case 2:
              arrayOfMessage[i] = "o";
              break; 
            case 3:
              arrayOfMessage[i] = "w";
              break;
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "x")
          {
            switch(r23) {
            case 0:
              arrayOfMessage[i] = "ks";
              break;
            case 1: 
              arrayOfMessage[i] = "x";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "y")
          {
            switch(r24) {
            case 0:
              arrayOfMessage[i] = "i";
              break;
            case 1: 
              arrayOfMessage[i] = "j";
              break;
            case 2:
              arrayOfMessage[i] = "y";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else if (arrayOfMessage[i] == "z")
          {
            switch(r25) {
            case 0:
              arrayOfMessage[i] = "zz";
              break;
            case 1: 
              arrayOfMessage[i] = "s";
              break;
            case 2:
              arrayOfMessage[i] = "ss";
              break;
            case 3:
              arrayOfMessage[i] = "x";
              break;
            case 4:
              arrayOfMessage[i] = "ze";
              break;
            case 5:
              arrayOfMessage[i] = "ss";
              break; 
             // default:
              //arrayOfMessage[i] = "1";
          }
          }
          else 
          {
            arrayOfMessage[i] = arrayOfMessage[i];
          }
        //}
        //else if arrayOfMessage[] = "b"
        //{
        //}
        //else if arrayOfMessage[] = "c"
        //{
        //}
        //change = false;
      }
      var str = arrayOfMessage.join('');

//message = "".join(arrayOfMessage)
    //}
    const emojifiedString = emoji.emojify(str);
    return <p>{name}: {emojifiedString}</p>;
  }
});

export default Message;
