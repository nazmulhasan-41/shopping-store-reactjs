
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { ProductConsumer } from '../context';

import {Link} from 'react-router-dom';
import BasicTextFields from './Cart/BasicTextFields';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth:400,
        alignContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf: "center",
        
    },
});

function valuetext(v) {
    return `${v}°C`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [v, setvalue] = React.useState([0, 100]);
    const [x, setvx] = React.useState([0, 100]);

    const [inputValue, setInputvalue] = React.useState([0, 100]);

    const handleChange = (event, newvalue) => {
        
        //setvalue(newvalue);
        setvx(newvalue);


        
    }

  


    return (


<div>






<div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
      
    





<ProductConsumer>





        

{(value) => (



            <div className={classes.root}>
              

                {/* <BasicTextFields/> */}
                <Slider
                    value={v}

                   

                    onChange={(event, newvalue) => {
                        //event.preventDefault();
                        setvalue(newvalue);
                        setvx(newvalue);
                
                        console.log("in front: ",x);
                        

                        value.filterProductsByPrice(x);
                    }}

                  
                    


                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />



              <h5>Price Range :  <span class="badge badge-secondary">${x[0]}0-${x[1]}0</span></h5>
        
        

        



            </div>
            

          
)
}


</ProductConsumer>

</div>

<div class="col-sm">
      
    </div>

    
  </div>
</div>

</div>



    );
}
