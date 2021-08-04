using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Core.Specification
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {
        }

        public BaseSpecification(Expression<Func<T, bool>> criteria)
        {
            Criteria = criteria;
        }

        public Expression<Func<T, bool>> Criteria {get;}

        public List<Expression<Func<T, object>>> Includes {get;} = 
            new List<Expression<Func<T, object>>>();

        public Expression<Func<T, object>> OrderBy {get; private set;}

        public Expression<Func<T, object>> OrderByDescending {get; private set;}

        public int Take {get; private set;}

        public int Skip {get; private set;}
        public bool IsPagingEnabled {get; private set;}
        protected void AddInclude(Expression<Func<T, object>> includeExpresion){
            Includes.Add(includeExpresion);
        }

        protected void AddOrderBy(Expression<Func<T, object>> ordeByExpression){
            OrderBy = ordeByExpression;
        }          
        protected void AddOrderByDescending(Expression<Func<T, object>> ordeByDescExpression){
            OrderByDescending = ordeByDescExpression;
        }

        protected void ApplyPaging(int skip, int take){
             Skip = skip;
             Take = take;
             IsPagingEnabled = true;
        }
    }
}