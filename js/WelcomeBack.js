class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'J',
            apppVersion: '1'
        }
    }

    render(){
        return(
            <div class="box-container">
    
            <div class="box">
                <h3>Quick links</h3>
                <a href="#home">home</a>    
                <a href="#packages">packages</a>
                <a href="#query">query</a>
            </div>
    
            <div class="box">
                <h3>extra links</h3>
                <a href="#contact">ask questions</a>
                <a href="#">terms of use</a>
                <a href="#">privacy policy</a>
            </div>
    
            <div class="box">
                <h3>Contact Info</h3>
                <a href="tel:+917217863536"> <i class="fas fa-phone"></i> +91 917217863536</a>
                <a href="mailto: mastermayank0120@gmail.com"> <i class="fas fa-envelope"></i> mayanksingh4370@gmail.com </a>
                <a href="#"> <i class="fas fa-map"></i> Noida, India - 632014 </a>
            </div>
    
            <div class="box">
                <h3>Follow Me</h3>
                <a href="https://www.instagram.com/mynk_kk/?hl=en"> <i class="fab fa-instagram"></i> Instagram </a>
                <a href="https://www.linkedin.com/in/mayank-singh-patwal/"> <i class="fab fa-linkedin"></i> Linkedin </a>
                <a href="https://github.com/m4YnK-7"> <i class="fab fa-github"></i> Github </a>
            </div>
        </div>
            
        )
    }
}