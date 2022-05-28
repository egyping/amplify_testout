# amplify_testout

install node 
install amplify cli 
    sudo npm install -g @aws-amplify/cli
configure amplify 
    amplify configure


run test app from sandbox 
https://sandbox.amplifyapp.com/
    npx create-react-app@latest myapp
    cd myapp

    amplify pull --sandboxId f4650b63-6669-4994-8585-9d9c50b4f29e
    from myapp folder run 
        npm start 
    npm install aws-amplify typescript