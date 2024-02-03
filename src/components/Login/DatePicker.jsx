import { array } from "prop-types"


export default function Date({handleInputChange}) {

    
    return (<>
      <div  className="flex items-center gap-3 self-stretch">
                <fieldset className="group border-neutral-500 border flex py-2 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                  <legend className="text-neutral-500 px-2 text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">Month</legend>
                
                  <select onChange={handleInputChange}  name='month' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
                    <option value="January" >January</option>
                    <option value='February' >February</option>
                    <option value='March' >March</option>
                    <option value='April' >April</option>
                    <option value='May' >May</option>
                    <option value='June' >June</option>
                    <option value='July' >July</option>
                    <option value='August' >August</option>
                    <option value='September' >September</option>
                    <option value='October' >October</option>
                    <option value='November' >November</option>
                    <option value='December' >December</option>
                  </select>
                </fieldset>
                <fieldset className="group border-neutral-500 border flex py-2 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                  <legend className="text-neutral-500 px-2  text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover ">Day</legend>
                  <select  onChange={handleInputChange} name='day' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
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
                </fieldset>
                <fieldset className="group border-neutral-500 border flex py-2 px-3 justify-between items-center self-stretch focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                  <legend className="text-neutral-500 px-2 text-sm not-italic font-medium leading-normal group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover ">Year</legend>
                  <select  onChange={handleInputChange} name='year' className="bg-neutral-1000 text-neutral-50 text-xl not-italic font-normal leading-normal focus-within:outline-none">
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
                    <option>1979</option>
                    <option>1978</option>
                    <option>1977</option>
                    <option>1976</option>
                    <option>1975</option>
                    <option>1974</option>
                    <option>1973</option>
                    <option>1972</option>
                    <option>1971</option>
                    <option>1970</option>
                    <option>1969</option>
                    <option>1968</option>
                    <option>1967</option>
                    <option>1966</option>
                    <option>1965</option>
                    <option>1964</option>
                    <option>1963</option>
                    <option>1962</option>
                    <option>1961</option>
                    <option>1960</option>
                  </select>
                </fieldset>
              </div>
    </>)
  }