# BUG

In production mode, a URL parameter value can be used to render a specific component client-side. Unfortunately, that same value can not be used to render dynamic attribute values.

See src/pages/index.js for example

# Reproduction Steps

`gatsby build && gatsby serve`

Navigate to [http://localhost:9000?color=blue](http://localhost:9000?color=blue)

Note that the correct div is rendered, but the dynamic style attribute is not rendered.

[logo]: ./src/images/bug.png

# Expected Behavior

The url parameter should be able to render the appropriate div AND render the appropriate style.

# Work around

We've been able to work around this by storing the parameter values in state, but I don't see why that should be necessary (especially since it renders the correct div).