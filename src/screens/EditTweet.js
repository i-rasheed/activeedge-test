import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Axios from 'axios'

const EditTweet = (props) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [body, setBody] = useState()
    const [error, setError] = useState()
    const [response, setResponse] = useState()
    const [isLoading, setIsLoading] = useState(false)


    const commentId = props.match.params.id
    

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
            const postData = {
                name,
                email,
                body
            }

            

        try { 
            setIsLoading(true)
            const postRes = await Axios.put(`https://jsonplaceholder.typicode.com/comments/${commentId}`, postData)
            setIsLoading(false)
            if(postRes.data){
                setResponse('Successfully Edited')
            }
        } catch(err){
            setIsLoading(false)
            setError(err.message)
        }
        
    }

    
        return (
            <div className="tweet-wrapper">
                <h1>Edit Tweet</h1>
                {error? (<h1>{error}</h1>) :
                response? (<h1>{response}</h1>):
                isLoading? (<h1>please wait...</h1>) : ""}
                <ValidatorForm
                useRef="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
                >
                <TextValidator
                    label="Name"
                    onChange={handleNameChange}
                    name="name"
                    value={name}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <TextValidator
                    label="Email"
                    onChange={handleEmailChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <TextValidator
                    label="Body"
                    onChange={handleBodyChange}
                    name="body"
                    value={body}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm>
            </div>
        );
    
}

export default EditTweet;