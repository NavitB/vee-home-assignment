import React from 'react';
import GrantCard from './GrantCard';
import { GrantWithUserGrant} from '../types/grant';

interface NewMatchesProps {
  grants: GrantWithUserGrant[];
  onLike: (id: string) => void;
  onDislike: (id: string) => void;
}

const NewMatches: React.FC<NewMatchesProps> = ({ grants, onLike, onDislike }) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        overflowY: 'hidden',
        padding: '10px 0',
        width: '100%',
      }}>
            {grants.map((grantData) => (
        <GrantCard key={grantData.grant.id} grant={grantData.grant} onLike={onLike} onDislike={onDislike} />
      ))}
    </div>
  );
};

export default NewMatches;
