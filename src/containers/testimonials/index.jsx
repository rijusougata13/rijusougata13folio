import React,{useEffect,useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Heading,SubHeading,ButtonField,BodyWrapper,Text,AboutText,Wrappers,AboutImg,About,Wrapper,Button,SvgDiv,BackgroundImg, BlackWrapper, TestimonialCard, Input} from './ styles/index';
import AboutMeImg from '../../assets/images/aboutMe.png';
import Background from '../../assets/images/cool-background (1).svg';
import { db } from '../../firebase/firebase';
import './styles.css';
import ModalBox from '../../components/modalBox/index';

import { AiFillFileAdd } from 'react-icons/ai';
const Testimonials=(props)=>{
    
    const [testimonials,setTestimonials]=useState({name:"",position:"",statement:""});
     const [userValues,setUserValues]=useState({name:"",position:"",statement:""});
    // const [testimonials,setTestimonials]=useState("hello");
    const [modal,setModal]=useState(false);

    useEffect(() => {
    Aos.init({duration:2000});
    console.log('effect');
    const unsub = db.collection('statement').onSnapshot(snapshot => {
      const allstatement = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(allstatement);
      // console.log(testimonials);
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);

  // add
  const deleteStatement = id => {
    db.collection('statement')
      .doc(id)
      .delete();
  };
const statementForm= db.collection("statement");
   const addStatement = async(data)=> await statementForm.add(data);

   const AddData=()=>{
    //  console.log(userValues);
      addStatement(userValues).then(()=>console.log("Ok")).catch((err)=>console.log(err));
      toggleModal();
   }
 const  toggleModal = () => {
    setModal(prev=>!prev);
  }

    return(
        <Wrapper id="testimonials">
      
            <Heading>Testimonials</Heading>
            <ButtonField>
          <AiFillFileAdd color="white" size="40px" onClick={toggleModal}/>
          <Text style={{color:"white",padding:'0'}}>Say Something</Text>
      </ButtonField>
<BodyWrapper>


   {
                   Object.entries(testimonials).map(([key, value]) =>(
                          <div class="testimonial-card">
                        <div class="text">
                           {value.statement} 
                        <i class="fas fa-quote-right quote"></i></div>
                          <div class="footer">
                            <div class="image">
                            </div>
                            <h3 class='person'>{value.name}</h3>
                            <h4 class="personposition">{value.position}</h4>
                            
                          </div>
                        </div>
                   ))
                //  Object.entries(testimonials).map(([key, value]) =>{
                //    console.log(value.name,value.position,value.statement);
                //  })
                  // console.log(testimonials)
               }


  </BodyWrapper>
  {/* <button >
          Open the modal
        </button> */}
       
        <ModalBox show={modal}
          onClose={toggleModal}>
           <Input type="text" placeholder="Name" onChange={e=>setUserValues(prev=>({
             ...prev,
             "name":e.target.value,
           }))}/>
             <Input type="text" placeholder="Position" onChange={e=>setUserValues(prev=>({
             ...prev,
             "position":e.target.value,
           }))}/>
           <Input type="text" style={{height:"30%",borderRadius:"10px"}} placeholder="Statement"onChange={e=>setUserValues(prev=>({
             ...prev,
             "statement":e.target.value,
           }))}/>
           <Button onClick={AddData}>Submit</Button>
        </ModalBox>
        
        </Wrapper>
       
    );
}

export default Testimonials;