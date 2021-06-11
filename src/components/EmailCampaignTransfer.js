import React,{useEffect} from 'react'
import { Transfer, Button as button,Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons'
import { connect } from "react-redux";
import { useHistory, withRouter ,Link} from "react-router-dom";
import { runCampaign } from "../actions/email";
import NavUserDropdown from "../components/NavUserDropdown";
import { getProduct,deleteProduct,updateProduct } from "../actions/products";
import { loadMyPlug } from "../actions/auth";
import { getPlugStats, getDueAmount } from "../actions/plugs";
import { Avatar, Checkbox } from "antd";
import classnames from "classnames";
import TransferComponent from './Transfer'

import { setAlert } from "../actions/alert";


import {Card ,
  Button,
   FormGroup,
   Input,
   Row,
   Col,Form,
Spinner,
   CardHeader,
   InputGroup,Container} from 'reactstrap'


import { Steps, message,List, Typography, Divider } from 'antd';

const { Step } = Steps;

const App = (props) => {
//   useEffect(() => {
//     // Good!
// getMock()
//   }, []);

  const [current, setCurrent] = React.useState(0);
  const [mockData, setMockData] = React.useState([]);
  const [ targetKeys, setTargetKeys] = React.useState([]);
  const [ chosenProducts, setProducts] = React.useState([]);
  const [products, setWholeProducts]=React.useState([])

  const [formData, setFormData] = React.useState({
    message: "",
    subjectLine: ""
  });

  const { message, subjectLine } = formData;

  const buttonSpinner = (
    <Spinner
      size="sm"
      style={{ marginRight: 6 }}
      // type="grow"
      color="white"
    />
  );



  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
 
    // e.preventDefault();
    // if (password !== passwordConfirm) {
    //   setAlert("Passwords do not match", "danger");
    // } else {
      props.runCampaign({ message, chosenProducts, subjectLine },props.history);
    // }
  };


  const handleChange = targetKeys => {
    setTargetKeys({ targetKeys });
  };




  const getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = props.myPlug && props.myPlug.products.map(item=> item)
      
      if (data.chosen) {
        targetKeys.push(data._id);
      }
      mockData.push(data);
    }
    setMockData({ mockData, targetKeys });
  };

 
const onProductsChange=(chosenProducts)=>{
  setProducts({chosenProducts})
} 

const onWholeProductsChange=(products)=>{
  setProducts({products})
} 
console.log(chosenProducts)
console.log(message)
  // filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;


// handleSearch = (dir, value) => {
//     console.log('search:', dir, value);
//   };

  const steps = [
    {
      title: 'Start',
      content: ( <Col style={{marginTop:'30px'}} md="12">
       
      <Card>  
      <CardHeader className="bg-secondary border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Choose products</h3>
              </Col>
              <Col className="text-right" xs="4">
   
              
              </Col>
            </Row>
          </CardHeader>
         <hr style={{ marginTop: "0", marginBottom: "10px" }}></hr>
        <Container>               <Col> <TransferComponent onWholeProductsChange={onWholeProductsChange} onProductsChange={onProductsChange}/> </Col>         <br style={{ marginTop: "0", marginBottom: "10px" }}></br> </Container>   
                     </Card>
                     <br style={{ marginTop: "0", marginBottom: "10px" }}></br>
   
                     </Col>),
    },
    {
      title: 'Second',
      content: (<Col style={{marginTop:'30px'}}>
      <Card>  
      <CardHeader className="bg-secondary border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Email details</h3>
              </Col>
              <Col className="text-right" xs="4">
   
              
              </Col>
            </Row>
          </CardHeader>
         <hr style={{ marginTop: "0", marginBottom: "10px" }}></hr>
        <Container> <FormGroup >
                       <label
                       className="labels"
                     htmlFor="input-country"
                        style={{ fontSize: "13px" }}
                       >
                      Subject line<span className="text-danger"> *</span>
                      </label>
              
                   <Input
                          
                         className="form-control"
                         id="input-address"
                   type="text"
                         name="subjectLine"
                         value={subjectLine}
                         onChange={onChange}
                
                       />
                     
                     </FormGroup>
                     <FormGroup >
              <label
                     className="labels"
                     htmlFor="input-country"
                     style={{ fontSize: "13px" }}
                   >
                     Short message<span className="text-danger"> *</span>
                   </label>
                   <Input
                      style={{height:'100px'}}
                     className="form-control"
                     id="input-address"
               type="textarea"
                     name="message"
                     value={message}
                     onChange={onChange}
                     
                   />
                 
                 </FormGroup></Container>   
                     </Card>

                     </Col>),
    },
    {
      title: 'Finish',
      content: (  
        <Card style={{marginTop:'30px'}}>  <Result
        icon={<SmileOutlined />}
        title={`Almost there!`}
        subTitle={`You're about to run an email campaign and won't be able to revert any changes hence proof read your information`}
    
        // subTitle={`${chosenProducts.chosenProducts.length} products selected`}
      extra={<Button  onClick={()=>onSubmit()} color="success">{props.emailCampaigns.loading && props.emailCampaigns.loading ? buttonSpinner:null}Run campaign</Button>}
      />
 </Card>
    ),
    },
  ];
  
  

  const renderFooter = () => (
    <button  size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
      reload
    </button >
  );
 

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content" >{steps[current].content}</div>        <Container style={{marginTop:'10px'}}><Col className="align-items-center"><div className="steps-action">

        {current < steps.length - 1 && (
        
         <Button color='primary'   type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
     
        {current > 0 && (
          <Button color='info' style={{ margin: '0 8px',marginLeft:'280' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div></Col></Container>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  emailCampaigns:state.createdEmailCampaign,
  auth: state.auth,
  product: state.product.product,
  isAuthenticated: state.auth,
  cartItems: state.cart.cartItems,
  myPlug: state.myPlug.plug,
  orders: state.plugSales.orders,
  amountDue: state.unBalancedSales.stats,
});

export default connect(mapStateToProps, {

runCampaign,
  loadMyPlug,
  setAlert,

  updateProduct,


})(withRouter(App));
