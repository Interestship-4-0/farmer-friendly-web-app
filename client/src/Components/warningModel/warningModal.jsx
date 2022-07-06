import "./warningModal.css";
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function WarningModal(props){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
    return(
        <Modal
        open={props.show}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography  className="warn" id="modal-modal-title" variant="h6" component="h2">
          <img src="https://cdn.icon-icons.com/icons2/54/PNG/128/warning_10828.png" alt="loading.."/>
          <p>{props.content}</p>
    
          </Typography>
          <Typography component={'div'} id="modal-modal-description" sx={{ mt: 2 }}>
            
       
          </Typography>
        </Box>
      </Modal>
        
    )
}
export default WarningModal;