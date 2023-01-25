Three Phases in LifeCycle: 

1) Mounting 2) Updating 3) Unmountng

1) Mounting: Putting the Component into the DOM
    
     1) constructor()
     2) getDerivedStateFromProps()
     3) render() - Required and is always called
     4) componentDidAmount()

2) Updating: When there is a change in component state or props

     1) getDerivedStateFromProps()
     2) shouldComponentUpdate()
     3) render()
     4) getSnapshotBeforeUpdate()
     5) componentDidUpdate()

3) Unmounting:     

     1) componentWillUnmount()