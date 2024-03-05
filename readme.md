<!-- prettier-ignore-start -->

Copyright © Written by [Yariv Gilad](https://yarivgilad.com) 
<hr>
  
## Filter that list!!   


1. The `<App>` is the only component that will manage state.
   and display the necessary data in the `<List>` component.

2) Create a `<Filter>` Component that renders the following JSX
   to begin with:

   <div className="header">
      <h4 className="filter_title">X items filtered</h4>
      <input className="filter"/>
   </div>

3) The `<Filter>` component should filter the list of data objects it will be given
   by the `first_name` key, and will check if it includes the typed text in its `<input>`
   The trigger for filtering is `onchange` event on the `<input>` you will implement.
   It is supposed to have effect on the `<App>` component state, which will be reflected
   by the `<List>` component.

4) The instance of the `<Filter>` component will be created in the `<App>` component only!
   The `<List>` and `<Filter>` components are siblings.

5) The `<Filter>` component should display the number of filtered items in the `<h4>`.

6) The `<Filter>` component should define the props it suppose to get
   in a proper `propTypes` block.

``` 
  ,_,
 (O,O)
 (   )
--"-"-------
```
Good luck!!   
[Yariv](https://www.linkedin.com/in/yarivgilad/)       

💡"Luck is the residue of good design" - Branch Rickey
---
<br>
<!-- prettier-ignore-end -->


