import React, {ReactDOM , useState} from "react";
import { Heading, Page } from "@shopify/polaris";
import {Provider, ResourcePicker} from '@shopify/app-bridge-react';






function App (){
  const [open, setOpen] = useState(false)

  function selectionHandle (items) {

    const selctionItems = items.selection.map((item) => item.id )
    console.log(selctionItems)
    console.log(items)

  }


return (
<Page
  title = "Prodact Selector"
  primaryAction={{
    content: "Select Products",
    onAction: ()=> setOpen(!open)
  }}  
>

  
      <ResourcePicker
        resourceType="Product" 
        open={open} 
        onCancel= {()=> setOpen(!open) }
        onSelection = {(items)=> selectionHandle(items) }
      />
 

<p>Im starting to understand this</p>

</Page>
);
}
  


export default App;

