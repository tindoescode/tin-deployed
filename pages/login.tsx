
import React, { ReactElement } from "react"

export interface loginProps {
	
}

export default function Login(props: loginProps): ReactElement | null {
	return (<>
		<div className="w-1/2 mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    	<div className="mb-4">
      	  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="username">
        	Username
      	  </label>
      	  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400" id="username" type="text" placeholder="Username" />
    	</div>
    	<div className="mb-6">
      	  <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
        	Password
      	  </label>
      	  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3" id="password" type="password" placeholder="******************" />
    	</div>
    	<div className="flex items-center justify-between">
      	  <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" type="button">
        	Sign In
      	  </button>
      	  <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-darker" href="#">
        	Forgot Password?
      	  </a>
    	</div>
	</div>
	</>)
}
