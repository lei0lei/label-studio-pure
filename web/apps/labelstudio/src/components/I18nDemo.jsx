import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, Button } from '@humansignal/ui';
import { Menu } from './Menu/Menu';

const LANGS = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
];

export function I18nDemo() {
  const { i18n } = useTranslation();
  const current = i18n.language;
  const dropdownRef = useRef();

  // 默认使用中文
  useEffect(() => {
    if (i18n.language !== 'zh') {
      i18n.changeLanguage('zh');
    }
    // 只在首次挂载时切换
    // eslint-disable-next-line
  }, []);

  const currentLang = LANGS.find(l => l.code === current) || LANGS[0];

  // 用flex包裹，保证与ThemeToggle对齐
  return (
    <div style={{display:'flex',alignItems:'center',height:'100%'}}>
      <Dropdown.Trigger
        ref={dropdownRef}
        align="left"
        content={
          <Menu>
            {LANGS.map(lang => (
              <Menu.Item
                key={lang.code}
                active={lang.code === current}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  dropdownRef.current?.close();
                }}
              >
                {lang.label}
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button size="small" variant="neutral" style={{height:32,marginRight:8}}>{currentLang.label}</Button>
      </Dropdown.Trigger>
    </div>
  );
}
