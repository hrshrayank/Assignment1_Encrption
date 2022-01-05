import {

    Container,
    Input,
    Typography,
    TextareaAutosize,
    Button,
    RadioGroup,
    Radio,
    FormControlLabel
    
    
  } from '@material-ui/core'


  import * as React from 'react'
 
  var CryptoJS = require("crypto-js");
  
  const  Encrpt =() => {
    const [Key, setKey] = React.useState('')
    const [InputText, setInputText] = React.useState('')
    const [OutputText, setOutputText] = React.useState('')
    const [Mode, setMode] = React.useState('1')
    const [Json, setJson] = React.useState('2')
   
  
    const onConvert = () => {
      try {
        const value = InputText
        const response = (value) => (value)
        // Encrypt
        if (Mode === '1') {
            const encrypted = CryptoJS.AES.encrypt(value, Key).toString()
            setOutputText(encrypted)
          }
    
          // Decrpyt
          if (Mode === '2') {
            const encrypted = CryptoJS.AES.decrypt(InputText, Key).toString(
              CryptoJS.enc.Utf8,
            )
    
  
          setOutputText(response(encrypted))
        }
      } catch (error) {
        console.log(error)
      }
    
    }
    return (
      <Container>
        
        <Typography variant="h5"> Encrypt App</Typography>

        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="1"onChange={setMode} value={Mode} >
            <FormControlLabel value="1"control={<Radio />} label="Encrypt" />
            <FormControlLabel value="2"control={<Radio />} label="Decrypt" />
 
        </RadioGroup>

        <Typography variant="h5"> Input Type</Typography>
  
        
      
  
        <Input
          placeholder="Key"
          value={Key}
          onChange={(e) => setKey(e.target.value)}
        />
        <Typography variant="h5"> Input</Typography>
        

        <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        
        style={{ width: 200 }}
        value={InputText}
        onChange={(e) => setInputText(e.target.value)}
        />

        
        <Typography variant="h5"> Output</Typography>

        <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        value={OutputText} disabled 
        style={{ width: 200 }}
        />


        
        <h1 mt="3" justifyContent="flex-end" border="1">
          <Button variant="outlined" color="secondary" onClick={onConvert}>
            Convert
          </Button>
        </h1>
      </Container>
    )
  }
  
  export default Encrpt;


  
