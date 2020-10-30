mport React from 'react';
import { Formik, Field, Form } from 'formik';
import { 
	  View, 
	  StyleSheet, 
	  Text, 
	  Button, 
	  Alert, 
	  TouchableHighlight, 
	  Dimensions,
	  Image} from 'react-native';

const pressMe = () =>{
	  Alert.alert("shop");
}
 const App = () => {
	    return (
		        
		         <View style={styles.container}>
		            <View style={{flex: 1, backgroundColor: 'blue',  alignItems: "center"}}></View>

		           <View style={{flex: 1, backgroundColor: 'blue',  alignItems: "center"}}>

		           <Image source={require('./assets/marcas.png')} style={{width: 1100, height: 200, justifyContent: 'center'}}></Image>
		           
		           <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'blue', justifyContent: 'center', alignItems: "center"}}>
		           <Image source={require('./assets/gorra.jpg')} style={{width: 300, height: 300, justifyContent: "center"}}></Image>
		           <Text  style={{flex: 1, flexDirection: 'column', color: "white", justifyContent: 'center', alignItems: "center"}}>Gorra Alpinestar</Text>
		           <Text  style={{flex: 1, flexDirection: 'column',  color: "white", justifyContent: 'center', alignItems: "center"}}>Talla S</Text>
		          
		          
		           <Formik
		          initialValues={{
				          firstName: '',
					          lastName: '',
					          email: '',
					        }}
		          onSubmit={async (values) => {
				          await new Promise((r) => setTimeout(r, 500));
				          alert(JSON.stringify(values, null, 2));
				        }}
		        >
		          <Form>
		            <label htmlFor="firstName">First Name:  </label>
		            <Field id="firstName" name="firstName" placeholder="First Name" />
		            <br></br>
		            <label htmlFor="lastName">Last Name:        </label>
		            <Field id="lastName" name="lastName" placeholder="last Name" />
		            <br></br>
		            <label color="red"  htmlFor="CellPhone">Cell Phone:    </label>
		    <Field id="CellPhone" name="CellPhone" placeholder="Cell Phone" />
		    <br></br>
		            <label htmlFor="email">Email:  </label>
		            <Field
		              id="email"
		              name="email"
		              placeholder="email@email.com"
		              type="email"
		            />
		            <br></br>
		            <br></br>
		          </Form>
		        </Formik>
		     
		           <Button title="Shop" onPress={pressMe}></Button>
		         
		             </View>
		           </View>
		         </View>
		       );
	  }
 const styles = StyleSheet.create({
	   container: {
		       flex: 1
		     },

	   });
  
export default App;
