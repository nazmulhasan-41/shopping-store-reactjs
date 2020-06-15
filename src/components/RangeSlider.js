
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { ProductConsumer } from '../context';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setvalue] = React.useState([20, 37]);
    const [x, setvx] = React.useState([20, 37]);

    const handleChange = (event, newvalue) => {
        setvalue(newvalue);
        setvx(newvalue);
        //console.log(newvalue);
    };

    return (



        <div>





            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom>
                    Price Range
                </Typography>
                <Slider
                    value={value}

                    

                    onChange={handleChange}


               

                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />

            </div>

            <ProductConsumer>
                    {(value) => {
                        console.log("********");

                        console.log(x);
                        console.log("********");


}

}

</ProductConsumer>


          
                   



                           
                        

                





        </div>




    );
}
