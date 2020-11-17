import React from "react";

const GymForm = () => {
   return (
      <div>
         <form>
            <div className="form-row">
               {/** <-- First Name --> */}
               <div className="form-group col-md-6">
                  <label for="inputEmail4">First Name </label>
                  <input type="text" className="form-control" />
               </div>
               {/** <-- Last Name --> */}
               <div className="form-group col-md-6">
                  <label for="inputEmail4">Last Name </label>
                  <input type="text" className="form-control" />
               </div>
               {/** <-- Email --> */}
               <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input
                     type="email"
                     className="form-control"
                     id="inputEmail4"
                  />
               </div>
               {/** <-- Mobile Number --> */}
               <div className="form-group col-md-6">
                  <label for="inputPassword4">Mobile Number</label>
                  <input type="number" className="form-control" />
               </div>
               {/** <-- Date of Birth  --> */}
               <div className="form-group col-md-2">
                  <label for="inputState">Date of Birth </label>
                  <select id="inputState" className="form-control">
                     <option selected>Day</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     <option>6</option>
                     <option>7</option>
                     <option>8</option>
                     <option>9</option>
                     <option>10</option>
                     <option>11</option>
                     <option>12</option>
                     <option>13</option>
                     <option>14</option>
                     <option>15</option>
                     <option>16</option>
                     <option>17</option>
                     <option>18</option>
                     <option>19</option>
                     <option>20</option>
                     <option>21</option>
                     <option>22</option>
                     <option>23</option>
                     <option>24</option>
                     <option>25</option>
                     <option>26</option>
                     <option>27</option>
                     <option>28</option>
                     <option>29</option>
                     <option>30</option>
                     <option>31</option>
                  </select>
               </div>
               <div className="form-group col-md-2">
                  <label for="inputState"> &nbsp;</label>
                  <select id="inputState" className="form-control">
                     <option selected>Month</option>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     <option>6</option>
                     <option>7</option>
                     <option>8</option>
                     <option>9</option>
                     <option>10</option>
                     <option>11</option>
                     <option>12</option>
                  </select>
               </div>
               <div className="form-group col-md-2">
                  <label for="inputState">&nbsp; </label>
                  <select id="inputState" className="form-control">
                     <option selected>Year</option>
                     <option>2020</option>
                     <option>2019</option>
                     <option>2018</option>
                     <option>2017</option>
                     <option>2016</option>
                     <option>2015</option>
                     <option>2014</option>
                     <option>2013</option>
                     <option>2012</option>
                     <option>2011</option>
                     <option>2010</option>
                     <option>2009</option>
                     <option>2008</option>
                     <option>2007</option>
                     <option>2006</option>
                     <option>2005</option>
                     <option>2004</option>
                     <option>2003</option>
                     <option>2002</option>
                     <option>2001</option>
                     <option>2000</option>
                     <option>1999</option>
                     <option>1998</option>
                     <option>1997</option>
                     <option>1996</option>
                     <option>1995</option>
                     <option>1994</option>
                     <option>1993</option>
                     <option>1992</option>
                     <option>1991</option>
                     <option>1990</option>
                     <option>1989</option>
                     <option>1988</option>
                     <option>1987</option>
                     <option>1986</option>
                     <option>1985</option>
                     <option>1984</option>
                     <option>1983</option>
                     <option>1982</option>
                     <option>1981</option>
                     <option>1980</option>
                  </select>
               </div>
               {/** <-- Gender --> */}
               <div className="form-group col-md-6">
                  <label for="inputState">Gender</label>
                  <select id="inputState" className="form-control">
                     <option selected></option>
                     <option>Male</option>
                     <option>Female</option>
                  </select>
               </div>
               {/** <-- Address --> */}
               <div className="form-group col-md-6">
                  <label for="inputAddress">Address Line 1:</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputAddress"
                  />
               </div>
               {/** <-- Country --> */}
               <div className="form-group col-md-6">
                  <label for="inputAddress2">Country/Region</label>
                  <input
                     type="text"
                     className="form-control"
                     id="inputAddress2"
                  />
               </div>
               {/** <-- City --> */}
               <div className="form-group col-md-6">
                  <label for="inputCity">City:</label>
                  <input type="text" className="form-control" id="inputCity" />
               </div>
               {/** <-- Postcode --> */}
               <div className="form-group col-md-6">
                  <label for="inputCity">Postcode</label>
                  <input
                     type="number"
                     className="form-control"
                     id="inputCity"
                  />
               </div>
            </div>

            <button type="submit" className="btn btn-primary">
               Next
            </button>
         </form>
      </div>
   );
};

export default GymForm;
