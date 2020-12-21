// import React from "react"
// import { ToolCardButtonsContainer } from "./LendDetail"
// import "./ItemCard.css"

// export const ItemCard = ({ tool }) => (
//     <div className="LendToolsIAmLendingCard">
//         <img className="NewToolPicture" src={tool.toolpicture ? tool.toolpicture : "/Images/ToolMeOnceLogo.jpg.png"} />
//         <div className="LendToolInfoContainer">
//             <ToolCardButtonsContainer tool={tool} />
//             <div className="LendToolName"><span className="ToolCardToolName">Tool Name:</span>&nbsp;  {tool.toolname}</div>
//             <div className="LendToolDescription"><span className="ToolCardToolDescription">Tool Description:</span>&nbsp;  {tool.tooldescription}</div>
//             <div className="LendToolSpecs"><span className="ToolCardToolSpecs">Tool Specifications:</span>&nbsp;  {tool.toolspecs}</div>
//             <div className="LendToolAccessories"><span className="ToolCardToolAccessories">Tool Accessories:</span>&nbsp;  {tool.toolaccessories}</div>
//             <div className="LendToolBorrower"><span className="ToolCardBorrowerEmail">Borrower Email:&nbsp;  {tool.borrowerid}</span></div>
//         </div>
//     </div>
// )