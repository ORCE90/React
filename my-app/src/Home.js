import React from 'react'

class Home extends React.Component {
    constructor () {
        super()
        /* Initial state*/ 
        this.state = {
            show: false
        }
    }

    showOrHide = (event) => {
        console.log(event.target.id)

        this.setState({ show: !this.state.show})
         /* menuvanje na state so setState() metoda
        otkako state-ot kje se smeni,
        komponentata si go vika svojt render metod odnovo
        (ASIHRONA e PAZETE!! noviot state moze da go procitate samo vo render i so callback)


        /*if (!this.state.show) {
            this.setState({show: true})
        } else {
            this.setState({show: false})  - mozhe i vaka !!!!!!
        }*/

       
    }

   
    

    /*Render method*/ 
    render () {
        
       
        
        /*najnovite state i props gi citame tuka*/
        /*let div = <div> Hello Semos! </div>

        /*if (this.state.show) {
            div = null
        }*/
    

        return (
        <React.Fragment>
            <button id='toggle'onClick={this.showOrHide}> Toggle me! </button>
            {this.state.show ? <div> Hello Semos! </div> :null}
        
        </React.Fragment>
        )
    }
}

export default Home