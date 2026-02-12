import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const SettingsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="settings-page">
      <h1>{t('settings.title')}</h1>
      <form>
        <label>{t('settings.language')}</label>
        <select>
          <option value="en">{t('settings.english')}</option>
          <option value="zh">{t('settings.chinese')}</option>
        </select>
        <button type="submit">{t('settings.save')}</button>
      </form>
    </div>
  );
};