import React, { useState } from 'react';

import './Navbar.scss'
import { NavbarProps } from '../../types'

function Navbar(props: NavbarProps) {
  const item1 = { index: 0, name: 'Projects', label: 'projects' }
  const item2 = { name: 'Publications', label: 'publications' }
  const item3 = { name: 'Experience', label: 'experience' }
  const item4 = { name: 'Contact', label: 'contact' }

  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return <>
    <div className="animated fadeInDown">
      <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" className="navbar-burger__line"></span>
        <span aria-hidden="true" className="navbar-burger__line"></span>
        <span aria-hidden="true" className="navbar-burger__line"></span>
      </a>

      <nav className="nav">
        <ul className="nav__list" id="navMenu">
          <NavListItem item={item1} 
                       clickHandler={() => {
                         props.tabChangeHandler(item1.label);
                         setActiveTabIndex(0);
                       }} 
                       isActive={activeTabIndex == 0} 
          />

          <NavListItem item={item2} 
                       clickHandler={() => {
                         props.tabChangeHandler(item2.label);
                         setActiveTabIndex(1);
                       }} 
                       isActive={activeTabIndex == 1} 
          />

          <NavListItem item={item3} 
                       clickHandler={() => {
                         props.tabChangeHandler(item3.label);
                         setActiveTabIndex(2);
                       }} 
                       isActive={activeTabIndex == 2} 
          />

          <NavListItem item={item4} 
                       clickHandler={() => {
                         props.tabChangeHandler(item4.label);
                         setActiveTabIndex(3);
                       }} 
                       isActive={activeTabIndex == 3} 
          />
        </ul>

        <ul className="nav__list nav__list--end">
            <li className="nav__list-item">
              <div className="themeswitch">
                <a title="Switch Theme">
                  <i className="fas fa-adjust fa-fw" aria-hidden="true"></i>
                </a>
              </div>
            </li>
        </ul>
      </nav>
    </div>
    </>
}

type NLI = {
  name: string,
  label: string,
}

type NavListItemProps = {
  item: NLI,
  clickHandler: React.MouseEventHandler<HTMLLIElement>,
  isActive: boolean,
}

function NavListItem(props: NavListItemProps) {
  const class_name = props.isActive ? "active-link {{ $labelClass }}" : "{{ $labelClass }}";
  
  return <>
    <li className="nav__list-item" onClick={props.clickHandler}>
      <div className="optionswitch">
        <input className="optionswitch__picker" type="checkbox" id="{{ $menuId }}" hidden />
        <label className={class_name}>
          {props.item.name}
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </label>
      </div>
    </li>
  </>
  {/*


{{ range $menuId, $menuItem := .Site.Menus.main }}
            {{ $active := eq $url $menuItem.URL }}
            {{ if $menuItem.HasChildren }}

              


  <li class="nav__list-item">
                <div class="optionswitch">
                  <input class="optionswitch__picker" type="checkbox" id="{{ $menuId }}" hidden />

                  {{ $labelClass := "optionswitch__label" }}
                  {{ range $menuItem.Children }}
                    {{ if eq $url .URL }}
                      {{ $labelClass = "optionswitch__label nav__link--active" }}


                    {{ end }}


                  {{ end }}


                  <label class="{{ $labelClass }}" for="{{ $menuId }}"
                    >{{ $menuItem.Name }} <i class="fa fa-angle-down" aria-hidden="true"></i
                  ></label>

                  <div class="optionswitch__triangle"></div>
                  <ul class="optionswitch__list">
                    {{ range $menuItem.Children }}
                      <li class="optionswitch__list-item">
                        <a
                          href="{{ .URL }}"
                          {{ if strings.HasPrefix .URL "http" }}
                            target="_blank" rel="noopener noreferrer"

                          {{ end }}
                          title="{{ .Title }}"
                          >{{ .Name }}</a
                        >
                      </li>

                    {{ end }}
                  </ul>
                </div>
              </li>

            {{ else }}
              <li class="nav__list-item">
                <a
                  {{ if $active }}
                    class="nav__link--active"

                  {{ end }}
                  href="{{ .URL }}"
                  {{ if strings.HasPrefix .URL "http" }}
                    target="_blank" rel="noopener noreferrer"

                  {{ end }}
                  title="{{ .Title }}"
                  >{{ $menuItem.Name }}</a
                >
              </li>

            {{ end }}


          {{ end }}
  */}
}

export default Navbar;