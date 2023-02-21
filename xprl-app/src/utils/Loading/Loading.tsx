/** @format */
import LoadingXrpl from '../../assets/xrpl-loader.png'
export function Loading() {
    return <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
        <img src={LoadingXrpl} style={{height:"40px"}} alt="loading.."></img>;
        </div>
}
